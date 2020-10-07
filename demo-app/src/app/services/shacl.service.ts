import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as jsonld from 'jsonld';
import * as urljoin from 'url-join';
import * as jsdiff from 'diff';
declare let ttl2jsonld : any; // Imported in index.html

export interface Report{
    conforms: boolean;
    report: any;
    implicit?: string;
}

@Injectable()
export class SHACLService {

    constructor(
        private _http: HttpClient
      ) { }

    pingServer(): Promise<any>{
        const url = environment.shaclEndpoint;
        return this._http.get(url).toPromise();
    }

    async saturateGraph(data, shapes): Promise<Report>{
        const url = urljoin(environment.shaclEndpoint, 'inference');
        const res: any = await this._http.post(url, {data, shapes}).toPromise();

        // Normalize the explicit triples and the full graph
        const full = res["graph"];

        const doc = ttl2jsonld.parse(data);

        // Do some JSON-LD work in parallel (Normalize the explicit triples and the full graph)
        const [ explicitNq, fullNq ] = await Promise.all([
            jsonld.canonize(doc, {
                algorithm: 'URDNA2015',
                format: 'application/n-quads'
            }),
            jsonld.canonize(JSON.parse(full), {
                algorithm: 'URDNA2015',
                format: 'application/n-quads'
            })
        ]);

        // Get only the difference (inferred triples)
        let diff = jsdiff.diffLines(explicitNq, fullNq);

        diff = diff
            .filter(obj => obj.added)
            .map(obj => obj.value)
            .map(section => {
                let triples = section.split("\n");
                section = triples
                    .filter(triple => !triple.includes("http://www.w3.org/2000/01/rdf-schema#Resource"))
                    .filter(triple => !triple.includes("http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"))
                    .filter(triple => !triple.includes("http://www.w3.org/2000/01/rdf-schema#subPropertyOf"))
                    .join("\n");
                return section;
            })
            .filter(section => section != "")
            .join('\n');

        return {implicit: diff, report: JSON.parse(res["report"]), conforms: res["conforms"]};
    }

    async validate(data: string, shapes: string, tbox?: string): Promise<Report>{
        
        const url = urljoin(environment.shaclEndpoint, 'validate');
        const res = await this._http.post(url, {data, shapes, tbox}).toPromise();

        const report = {
            conforms: res["conforms"],
            report: res["report"]
        }
        
        return report;
    }

}
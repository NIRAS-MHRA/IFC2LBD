import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import * as urljoin from 'url-join';

@Injectable({
  providedIn: 'root'
})
export class ReasoningService {

  constructor(
    private _http: HttpClient
  ) { }

  // Ping to check that the service is alive
  ping(): Promise<any>{
    const url = environment.reasoningEndpoint;
    return this._http.get(url).toPromise();
  }

  async saturateGraph(abox: string, tbox: string): Promise<string>{

    const url = urljoin(environment.reasoningEndpoint, 'saturate');
    // const url = urljoin('http://localhost:3001', 'saturate');

    const res = await this._http.post(url, {abox, tbox}, { responseType: 'text' }).toPromise();

    // // Extract unique triples
    // const lines = res.split("\n");

    // // Filter out <xx> a owl:Thing and 
    // const triples = lines
    //                 .filter(l => !l.includes("a owl:Thing"))
    //                 .join("\n");

    return res;

  }

}
import { Component, Input, OnInit } from '@angular/core';
import * as jsonld from 'jsonld';
declare let ttl2jsonld : any; // Imported in index.html

export interface Result{
    focusNode: string;
    resultMessage: any;
    resultSeverity: string;
}

@Component({
    selector: 'shacl-results',
    templateUrl: './shacl-results.component.html',
    styleUrls: ['./shacl-results.component.css']
})
export class SHACLResultsComponent implements OnInit {

    @Input() ttl: string;    // Report in turtle format
    @Input() jsonld: string;    // Report in turtle format
    results;

    constructor() { }

    async ngOnInit() {
        if(this.ttl){
            const doc = ttl2jsonld.parse(this.ttl);
            const expanded = await jsonld.flatten(doc);
            this.processReport(expanded);
        }
        if(this.jsonld){
            const expanded = await jsonld.flatten(this.jsonld);
            this.processReport(expanded);
        }
    }

    processReport(flattened){

        let results: Result[] = [];
        flattened.forEach(item => {

            // Only handle validation results
            if(item["@type"] != undefined && item["@type"].includes("http://www.w3.org/ns/shacl#ValidationResult")){
                const focusNode = item["http://www.w3.org/ns/shacl#focusNode"] ? item["http://www.w3.org/ns/shacl#focusNode"][0]["@id"] : null;
                const resultMessage = item["http://www.w3.org/ns/shacl#resultMessage"];
                const resultSeverity = item["http://www.w3.org/ns/shacl#resultSeverity"] ? item["http://www.w3.org/ns/shacl#resultSeverity"][0]["@id"].split("http://www.w3.org/ns/shacl#")[1] : null;
                results.push({focusNode, resultMessage, resultSeverity});
            }

        });

        this.results = results;
    }
}
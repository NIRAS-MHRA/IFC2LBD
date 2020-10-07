import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
// import * as jsonld from 'jsonld';
declare let ttl2jsonld : any; // Imported in index.html

@Component({
    selector: 'triple-viewer',
    templateUrl: './triple-viewer.component.html',
    styleUrls: ['./triple-viewer.component.css']
})
export class TripleViewerComponent implements OnChanges {

    @Input() triples: string;     // Triples in Turtle format

    public turtle: string;
    public jsonld: string = "x";

    public syntaxOptions = ["Turtle", "JSON-LD"];
    public selectedSyntax = "Turtle";

    // Codemirror
    public config = {
        lineNumbers: true,
        firstLineNumber: 1,
        lineWrapping: true,
        matchBrackets: true,
        mode: 'text/turtle'
    };

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if(changes.triples.currentValue){
            this.processTriples(this.triples);
        }
    }

    async processTriples(triples){
        this.turtle = triples;
        this.jsonld = JSON.stringify(ttl2jsonld.parse(triples), null, "\t");
    }

    onSyntaxChange(){
        if(this.selectedSyntax == "Turtle"){
            this.config.mode == "text/turtle"
        }
        if(this.selectedSyntax == "JSON-LD"){
            this.config.mode == "application/json"
        }
    }

}
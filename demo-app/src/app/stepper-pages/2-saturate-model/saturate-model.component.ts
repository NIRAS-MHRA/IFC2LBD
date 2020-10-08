import { Component, OnInit } from '@angular/core';
import { ReasoningService } from 'src/app/services/reasoning.service';
import { Globals } from 'src/app/services/globals';

@Component({
    selector: 'app-saturate-model',
    templateUrl: './saturate-model.component.html',
    styleUrls: ['./saturate-model.component.css'],
    providers: [ ReasoningService ]
})
export class SaturateModelComponent implements OnInit {

    public modelTriples = "";
    public ontologyTriples = "";
    public implicitTriples = "";

    public serverAvailable: boolean = undefined;

    public error = "";

    constructor(
        private _rs: ReasoningService,
        private _g: Globals
    ) { }

    async ngOnInit() {
        this.pingServer();
        this.initObservables();
    }

    // Observe global model- and ontology triples
    initObservables(){
        this._g.getModelTriples().subscribe(triples => {
            this.modelTriples = triples;
        }, err => console.log(err));
        this._g.getOntologyTriples().subscribe(triples => {
            this.ontologyTriples = triples;
        }, err => console.log(err));
    }

    // Ping the server to check if the service is available
    async pingServer(){
        try{
            await this._rs.ping();
            this.serverAvailable = true;
        }catch(error){
            this.serverAvailable = false;
            console.log(error);
        }
    }

    useSampleModelTriples(){
        this._g.useSampleModelTriples();
    }

    onModelTriplesChange(ev){
        this.modelTriples = ev;
        this._g.setModelTriples(ev);
    }

    useSampleOntologyTriples(){
        this._g.useSampleOntologyTriples();
    }

    onOntologyTriplesChange(ev){
        this.ontologyTriples = ev;
        this._g.setOntologyTriples(ev);
    }

    async saturateGraph(){
        this.error = "";
        try{
            this.implicitTriples = await this._rs.saturateGraph(this.modelTriples, this.ontologyTriples);
            console.log(this.implicitTriples);
        }catch(e){
            this.error = e;
            console.log(e);
        }
    }
}

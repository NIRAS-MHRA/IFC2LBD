import { Component, OnInit } from '@angular/core';
import { SaturateModelService } from './saturate-model.service';
import { ReasoningService } from 'src/app/services/reasoning.service';

@Component({
    selector: 'app-saturate-model',
    templateUrl: './saturate-model.component.html',
    styleUrls: ['./saturate-model.component.css'],
    providers: [ SaturateModelService , ReasoningService ]
})
export class SaturateModelComponent implements OnInit {

    public modelTriples = "";
    public ontologyTriples = "";
    public implicitTriples = "";

    public serverAvailable: boolean = undefined;

    // Codemirror
    public cmTriples = { 
        lineNumbers: true,
        firstLineNumber: 1,
        lineWrapping: true,
        matchBrackets: true,
        mode: 'text/turtle'
    };

    constructor(
        private _s: SaturateModelService,
        private _rs: ReasoningService
    ) { }

    async ngOnInit() {
        this.pingServer();
    }

    // Ping the server to check if the service is available
    async pingServer(){
        try{
            await this._rs.ping();
            this.serverAvailable = true;
        }catch(error){
            console.log(error);
        }
    }

    useSampleModelTriples(){
        this.modelTriples = this._s.getSampleTriples();
    }

    useSampleOntologyTriples(){
        this.ontologyTriples = this._s.getSampleOntology();
    }

    async saturateGraph(){
        try{
            this.implicitTriples = await this._rs.saturateGraph(this.modelTriples, this.ontologyTriples);
            console.log(this.implicitTriples);
        }catch(e){
            console.log(e);
        }
    }
}

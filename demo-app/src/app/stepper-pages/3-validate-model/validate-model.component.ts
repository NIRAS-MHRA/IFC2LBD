import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/services/globals';
import { Report, SHACLService } from 'src/app/services/shacl.service';
import { ValidateModelService } from './validate-model.service';

@Component({
    selector: 'app-validate-model',
    templateUrl: './validate-model.component.html',
    styleUrls: ['./validate-model.component.css'],
    providers: [ValidateModelService, SHACLService]
})
export class ValidateModelComponent implements OnInit {

    public serverAvailable: boolean = undefined;
    abox: string;
    shapes: string;
    tbox: string;

    public conforms: boolean = undefined;
    public report: Report;

    public error = "";

    constructor(
        private _s: ValidateModelService,
        private _ss: SHACLService,
        private _g: Globals
    ) { }

    ngOnInit(): void {
        this.pingServer();
        this.initObservables();
    }

    // Observe global model- and ontology triples
    initObservables(){
        this._g.getModelTriples().subscribe(triples => {
            this.abox = triples;
        }, err => console.log(err));
        this._g.getOntologyTriples().subscribe(triples => {
            this.tbox = triples;
        }, err => console.log(err));
    }

    // Ping the server to check if the service is available
    async pingServer(){
        try{
            await this._ss.pingServer();
            this.serverAvailable = true;
        }catch(error){
            this.serverAvailable = false;
            console.log(error);
        }
    }

    useSampleShapes(){
        this.shapes = this._s.getSampleShapes();
    }

    async onValidate(){
        this.error = "";
        try{
            this.report = await this._ss.validate(this.abox, this.shapes);
        }catch(err){
            this.error = err;
            console.log(err);
        }
    }

    async onValidateSaturated(){
        this.error = "";
        try{
            this.report = await this._ss.validate(this.abox, this.shapes, this.tbox);
        }catch(err){
            this.error = err;
            console.log(err);
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { AdvancedSHACLService } from './advanced-shacl.service';
import { Report, SHACLService } from 'src/app/services/shacl.service';

@Component({
    selector: 'app-advanced-shacl',
    templateUrl: './advanced-shacl.component.html',
    styleUrls: ['./advanced-shacl.component.css'],
    providers: [ SHACLService, AdvancedSHACLService ]
})
export class AdvancedSHACLComponent implements OnInit {

    public serverAvailable: boolean = undefined;
    public shaclAdvancedData = "";
    public shaclAdvancedShapes = "";

    // Result
    public implicitTriples = "";
    public conforms: boolean = undefined;
    public report: Report;

    public error = "";

    constructor(
        private _s: AdvancedSHACLService,
        private _ss: SHACLService
    ) { }

    ngOnInit(): void {
        this.pingServer()
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

    useSampleData(){
        this.shaclAdvancedData = this._s.getSampleData();
    }

    useSampleShapes(){
        this.shaclAdvancedShapes = this._s.getSampleShapes();
    }

    async saturateGraph(){
        this.error = "";
        try{
            this.report = await this._ss.saturateGraph(this.shaclAdvancedData, this.shaclAdvancedShapes);
        }catch(e){
            this.error = e;
            console.log(e);
        }
    }

}

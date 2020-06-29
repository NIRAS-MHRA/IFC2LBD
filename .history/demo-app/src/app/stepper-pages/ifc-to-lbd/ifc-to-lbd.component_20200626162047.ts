import { Component, OnInit } from '@angular/core';
import { IFCService } from 'src/app/services/ifc.service';

@Component({
  selector: 'app-ifc-to-lbd',
  templateUrl: './ifc-to-lbd.component.html',
  styleUrls: ['./ifc-to-lbd.component.css'],
  providers: [ IFCService ]
})
export class IfcToLbdComponent implements OnInit {

  public serverAvailable: boolean = false;

  constructor(
    private _ifcService: IFCService
  ) { }

  ngOnInit(): void {

    this.pingServer();

  }

  // Ping the server to check if the service is available
  async pingServer(){
    try{
      await this._ifcService.ping();
      this.serverAvailable = true;
    }catch(error){
      console.log(error);
    }
  }

  async convertIFC(){
    try{
      const res = this._ifcService.convertIFC("x");
    }catch(error){
      console.log(error);
    }
  }

}

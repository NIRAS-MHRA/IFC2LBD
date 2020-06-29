import { Component, OnInit } from '@angular/core';
import { IFCService } from 'src/app/services/ifc.service';

@Component({
  selector: 'app-ifc-to-lbd',
  templateUrl: './ifc-to-lbd.component.html',
  styleUrls: ['./ifc-to-lbd.component.css'],
  providers: [ IFCService ]
})
export class IfcToLbdComponent implements OnInit {

  constructor(
    private _ifcService: IFCService
  ) { }

  ngOnInit(): void {

    this.pingServer();

  }

  async pingServer(){
    try{
      const res = this._ifcService.ping();
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IFCService {

  constructor(
    private _http: HttpClient
  ) { }

  convertIFC(file){

    const url = environment.backendURL;

    return this._http.get(url).toPromise();

  }

}

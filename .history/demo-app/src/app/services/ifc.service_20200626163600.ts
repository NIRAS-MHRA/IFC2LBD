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

  // Ping to check that the service is alive
  ping(): Promise<any>{
    const url = environment.backendURL;
    return this._http.get(url).toPromise();
  }

  convertIFC(file: File){

    const url = environment.backendURL;

    return this._http.get(url).toPromise();

  }

}

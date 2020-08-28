import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

import * as urljoin from 'url-join';

@Injectable({
  providedIn: 'root'
})
export class IFCService {

  constructor(
    private _http: HttpClient
  ) { }

  // Ping to check that the service is alive
  ping(): Promise<any>{
    const url = environment.ifcParseEndpoint;
    return this._http.get(url).toPromise();
  }

  async convertIFC(name: string, file: File): Promise<void>{

    const fileName = name.toLowerCase().replace('ifc', 'zip');

    let formData = new FormData();
    formData.append('file', file, name);

    const url = urljoin(environment.ifcParseEndpoint, 'transform');

    const blob = await this._http.post(url, formData, { responseType: 'blob' }).toPromise();
    saveAs(blob, fileName);

  }

}
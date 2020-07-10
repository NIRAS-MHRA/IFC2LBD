import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FileSaverService } from 'ngx-filesaver';

import * as urljoin from 'url-join';

@Injectable({
  providedIn: 'root'
})
export class IFCService {

  constructor(
    private _http: HttpClient,
    private _FileSaverService: FileSaverService
  ) { }

  // Ping to check that the service is alive
  ping(): Promise<any>{
    const url = environment.backendURL;
    return this._http.get(url).toPromise();
  }

  convertIFCString(name: string, file: File): Promise<string>{

    let formData = new FormData();
    formData.append('file', file, name);

    const url = urljoin(environment.backendURL, 'transform');

    return this._http.post(url, formData, {responseType: 'text'}).toPromise();

  }

  async convertIFC(name: string, file: File): Promise<void>{

    const fileName = name.toLowerCase().replace('ifc', 'zip');

    let formData = new FormData();
    formData.append('file', file, name);

    const url = urljoin(environment.backendURL, 'transform');

    const blob = await this._http.post(url, formData, { responseType: 'blob' }).toPromise()
    this._FileSaverService.save((<any>blob)._body, fileName);
    
    return;

  }

}

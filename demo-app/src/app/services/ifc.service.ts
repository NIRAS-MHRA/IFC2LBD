import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

import * as urljoin from 'url-join';


@Injectable({
  providedIn: 'root'
})
export class IFCService {

  url = urljoin(environment.ifcParseEndpoint, 'transform');

  constructor(
    private _http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  // Ping to check that the service is alive
  ping(): Promise<any>{
    const url = environment.ifcParseEndpoint;
    return this._http.get(url).toPromise();
  }

  async convertDuplex(): Promise<void>{

    // Get IFC file
    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/Duplex_A.ifc');
    const ifcFile = await this._http.get('/assets/Duplex_A.ifc', {responseType: 'text'}).toPromise();

    // Convert it to a blob and add it to a form
    var outBlob = new Blob([ifcFile], {type: 'text/plain'});
    let formData = new FormData();
    formData.append('file', outBlob, "Duplex_A.ifc");

    const inBlob = await this._http.post(this.url, formData, { responseType: 'blob' }).toPromise();
    saveAs(inBlob, "Duplex_A.zip");
  }

  async convertIFC(name: string, file: File): Promise<void>{

    const fileName = name.toLowerCase().replace('ifc', 'zip');

    let formData = new FormData();
    formData.append('file', file, name);

    const blob = await this._http.post(this.url, formData, { responseType: 'blob' }).toPromise();
    saveAs(blob, fileName);

  }

}
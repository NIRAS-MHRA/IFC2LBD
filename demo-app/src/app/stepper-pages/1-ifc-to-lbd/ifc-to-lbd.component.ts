import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import { IFCService } from 'src/app/services/ifc.service';

import 'codemirror/mode/turtle/turtle';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sparql/sparql';

@Component({
  selector: 'app-ifc-to-lbd',
  templateUrl: './ifc-to-lbd.component.html',
  styleUrls: ['./ifc-to-lbd.component.css'],
  providers: [ IFCService ]
})
export class IfcToLbdComponent implements OnInit {

  public serverAvailable: boolean = undefined;
  public success: boolean;

  // File drop
  public fileLoadStatus: string = "";
  public fileLoadError: string = "";

  // Codemirror
  public cmConfig = { 
      lineNumbers: true,
      firstLineNumber: 1,
      lineWrapping: true,
      matchBrackets: true,
      mode: 'text/turtle'
  };

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
      this.serverAvailable = false;
      console.log(error);
    }
  }

  // Fires when a file is dropped
  public dropped(files: NgxFileDropEntry[]) {

    this.success = undefined;

    this.fileLoadStatus = null;
    this.fileLoadError = null;

    if(files.length != 1){
      this.fileLoadError = "Upload af flere filer understøttes ikke";
      return;
    }else{
      this.evaluateFile(files[0]);
    }
  }

  public evaluateFile(droppedFile: NgxFileDropEntry){
    // Is it a file?
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {

          // Evaluate size
          const size = Math.round(file.size/1000000);
          this.fileLoadStatus = `Loadede filen på ${size} mb --> udtrækker indhold`;

          // Only process IFC files
          const fileName = file.name;
          const fileExtension = fileName.split('.').pop();
          if(fileExtension.toLowerCase() != "ifc"){
            this.fileLoadError = "Den uploadede fil var ikke en IFC";
            return;
          }

          this.readFile(file, fileName);

      });
      } else {
          // It was a directory (empty directories are added, otherwise only files)
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          console.log(droppedFile.relativePath, fileEntry);
      }
  }

  public async uploadDuplex(){
    this.success = undefined;
    this.fileLoadStatus = `Sender filen til server...`;
    try{
      await this._ifcService.convertDuplex();
      this.fileLoadStatus += `<br>Konvertering lykkedes!`;
      this.success = true;
    }catch(err){
      console.log(err);
      this.fileLoadError = `Der skete en fejl på serveren`;
    }
  }

  public async readFile(file: File, fileName) {

    this.fileLoadStatus += `<br>Sender filen til server...`;

    try{
      await this._ifcService.convertIFC(fileName, file);
      this.fileLoadStatus += `<br>Konvertering lykkedes!`;
      this.success = true;
    }catch(error){
      console.log(error);
      this.fileLoadError = `Der skete en fejl på serveren`;
    }

  }

}

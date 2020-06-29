import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import { IFCService } from 'src/app/services/ifc.service';

@Component({
  selector: 'app-ifc-to-lbd',
  templateUrl: './ifc-to-lbd.component.html',
  styleUrls: ['./ifc-to-lbd.component.css'],
  providers: [ IFCService ]
})
export class IfcToLbdComponent implements OnInit {

  public serverAvailable: boolean = false;

  // File drop
  public file: NgxFileDropEntry;
  public fileLoadResult: string;
  public fileLoadError: string;

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

  // Fires when a file is dropped
  public dropped(files: NgxFileDropEntry[]) {

    this.file = null;
    this.fileLoadResult = null;
    this.fileLoadError = null;

    if(files.length != 1){
      this.fileLoadError = "Upload af flere filer understøttes ikke";
      return;
    }else{
      this.file = files[0];
      this.validateFile(this.file);
    }
  }

  public validateFile(droppedFile: NgxFileDropEntry){
    // Is it a file?
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          const size = Math.round(file.size/1000000);
          this.fileLoadResult = `Loadede filen på ${size} mb --> udtrækker indhold`;

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

  public readFile(file: File, fileName) {

    console.log(`Sending ${fileName} to server...`);

    try{
      const res = this._ifcService.convertIFC(file);
    }catch(error){
      console.log(error);
    }

  }

}

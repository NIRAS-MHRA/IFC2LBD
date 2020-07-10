import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ANGULAR MATERIAL (https://material.angular.io/)
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';

// FX FLEX (https://github.com/angular/flex-layout/wiki/fxFlex-API)
import {FlexLayoutModule} from '@angular/flex-layout';

// NGX FILE DROP (https://www.npmjs.com/package/ngx-file-drop)
import { NgxFileDropModule } from 'ngx-file-drop';

// NG2 CODEMIRROR (https://www.npmjs.com/package/ng2-codemirror)
import { CodemirrorModule } from 'ng2-codemirror';

// File saver module (https://www.npmjs.com/package/ngx-filesaver)
import { FileSaverModule } from 'ngx-filesaver';

// APP COMPONENTS
import { AppComponent } from './app.component';
import { IfcToLbdComponent } from 'src/app/stepper-pages/ifc-to-lbd/ifc-to-lbd.component';

@NgModule({
  declarations: [
    AppComponent,
    IfcToLbdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    FileSaverModule,
    FlexLayoutModule,
    NgxFileDropModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

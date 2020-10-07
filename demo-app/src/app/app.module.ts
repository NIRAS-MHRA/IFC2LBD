import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ANGULAR MATERIAL (https://material.angular.io/)
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

// FX FLEX (https://github.com/angular/flex-layout/wiki/fxFlex-API)
import {FlexLayoutModule} from '@angular/flex-layout';

// NGX FILE DROP (https://www.npmjs.com/package/ngx-file-drop)
import { NgxFileDropModule } from 'ngx-file-drop';

// APP MODULES
import { TripleViewerModule } from 'src/app/modules/triple-viewer.module';
import { SHACLResultsModule } from './modules/shacl-results.module';

// APP COMPONENTS
import { AppComponent } from './app.component';
import { IfcToLbdComponent } from 'src/app/stepper-pages/1-ifc-to-lbd/ifc-to-lbd.component';
import { SaturateModelComponent } from 'src/app/stepper-pages/2-saturate-model/saturate-model.component';
import { ValidateModelComponent } from 'src/app/stepper-pages/3-validate-model/validate-model.component';
import { AdvancedSHACLComponent } from 'src/app/stepper-pages/4-advanced-shacl/advanced-shacl.component';

// GLOBALS
import { Globals } from 'src/app/services/globals';

@NgModule({
  declarations: [
    AppComponent,
    IfcToLbdComponent,
    SaturateModelComponent,
    ValidateModelComponent,
    AdvancedSHACLComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    FlexLayoutModule,
    NgxFileDropModule,
    TripleViewerModule,
    SHACLResultsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }

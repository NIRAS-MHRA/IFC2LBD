import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ANGULAR MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';

// FX FLEX
import {FlexLayoutModule} from '@angular/flex-layout';

// APP COMPONENTS
import { IfcToLbdComponent } from 'src/app/stepper-pages/ifc-to-lbd/ifc-to-lbd.component';

@NgModule({
  declarations: [
    AppComponent,
    IfcToLbdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

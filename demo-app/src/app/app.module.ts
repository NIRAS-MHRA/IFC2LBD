import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ANGULAR MATERIAL
import {MatCardModule} from '@angular/material/card';

// FX FLEX
import {FlexLayoutModule} from '@angular/flex-layout';

// APP COMPONENTS
import { IfcToLbdComponent } from './ifc-to-lbd/ifc-to-lbd.component';

@NgModule({
  declarations: [
    AppComponent,
    IfcToLbdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

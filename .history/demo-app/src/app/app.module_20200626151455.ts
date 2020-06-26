import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// APP COMPONENTS
import { IfcToLbdComponent } from './ifc-to-lbd/ifc-to-lbd.component';

@NgModule({
  declarations: [
    AppComponent,
    IfcToLbdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

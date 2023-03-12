import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ResourcesModule} from "./_resources";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

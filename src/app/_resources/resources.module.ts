import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CardComponent} from "./_card";


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CardComponent
  ]
})

export class ResourcesModule {}

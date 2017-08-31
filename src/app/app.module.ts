import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilComponent } from './util/util.component';
import { UploadComponent } from './upload/upload.component';
import {DataService} from "./data.service";
import {Http, HttpModule} from "@angular/http";
import {SelectionService} from "./selection.service";
import { UtildatabaseComponent } from './utildatabase/utildatabase.component';
import { UtildropboxComponent } from './utildropbox/utildropbox.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    UtilComponent,
    UploadComponent,
    UtildatabaseComponent,
    UtildropboxComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [DataService, SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

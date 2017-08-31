import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {File} from "./model";
import 'rxjs/add/operator/map';
import {SelectionService} from "./selection.service";

@Injectable()
export class DataService {

  constructor(private http : Http,
              private selectionService : SelectionService) { }

  headers = new Headers();


  getFiles() : Observable <Array<File>> {
    if (this.selectionService.getOngletSelected()==1) {
      return this.http.get(`http://10.31.1.29:8080/poei-1/api/files`,
        {headers : this.headers}).map(res => res.json() as Array<File>);
    } else if (this.selectionService.getOngletSelected()==2) {

      return this.http.get(`http://10.31.1.29:8080/poei-1/api/filesdatabase`,
        {headers : this.headers}).map(res => res.json() as Array<File>);
    } else if (this.selectionService.getOngletSelected()==3) {

      return this.http.get(`http://10.31.1.29:8080/poei-1/api/filesdropbox`,
        {headers : this.headers}).map(res => res.json() as Array<File>);
    }

  }


}

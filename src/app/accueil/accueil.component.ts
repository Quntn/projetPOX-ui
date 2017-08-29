import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Observable} from "rxjs";
import {File} from "../model";
import {Http} from "@angular/http";
import {SelectionService} from "../selection.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  files : Observable <Array<File>>;

  constructor(private dataService : DataService,
              private selectionService : SelectionService) {
    this.files = dataService.getFiles();
  }

  ngOnInit() {
  }

  setOnglet (onglet : number) {
    this.selectionService.setOngletSelected(onglet);
    this.files = this.dataService.getFiles();
  }



  onClick (fileClicked : File) : void {
    if (this.selectionService.getFileSelected()==fileClicked) {
      this.selectionService.setFileSelected(undefined);
    } else {
      this.selectionService.setFileSelected(fileClicked);
    }

  }

  isFileSelected(file : File) : boolean {
    return (file==this.selectionService.getFileSelected())
}

isOngletSelected ( onglet : number) : boolean {
    return (onglet == this.selectionService.getOngletSelected())
}
}

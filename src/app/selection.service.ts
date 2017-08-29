import { Injectable } from '@angular/core';
import {File} from "./model";

@Injectable()
export class SelectionService {

  public fileSelected : File = undefined;
  public ongletSelected : number = 1;
  constructor() { }



  setFileSelected (file : File) : void {
    this.fileSelected = file;
  }

  getFileSelected () : File {
    return this.fileSelected;
  }

  setOngletSelected (onglet : number) : void {
    this.ongletSelected = onglet;
  }

  getOngletSelected () : number {
    return this.ongletSelected;
  }
}

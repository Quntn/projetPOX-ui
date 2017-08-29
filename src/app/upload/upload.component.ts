import { Component, OnInit } from '@angular/core';
import {SelectionService} from "../selection.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private selectionService : SelectionService) { }

  ngOnInit() {
  }

  isOngletSelected ( onglet : number) : boolean {
    return (onglet == this.selectionService.getOngletSelected())
  }
}

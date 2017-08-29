import {Component, OnInit, Input} from '@angular/core';
import {File} from "../model";

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {

  @Input() file : File;


  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-utildatabase',
  templateUrl: './utildatabase.component.html',
  styleUrls: ['./utildatabase.component.css']
})
export class UtildatabaseComponent implements OnInit {

  @Input() file : File;

  constructor() { }

  ngOnInit() {
  }



}

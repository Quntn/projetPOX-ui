import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-utildropbox',
  templateUrl: './utildropbox.component.html',
  styleUrls: ['./utildropbox.component.css']
})
export class UtildropboxComponent implements OnInit {

  @Input() file : File  ;

  constructor() { }

  ngOnInit() {
  }

}

import { Skipass } from './../Model/ski-pass.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ski-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {
  @Input() skipass: Skipass[];
  
  constructor() { }

  ngOnInit() {
  }

}

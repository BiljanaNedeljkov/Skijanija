
import { Track } from './../Model/track.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ski-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() nesto:Track[];
  @Output() sortBy: EventEmitter<string> = new EventEmitter;
  

  constructor() { }

  ngOnInit() {
  }

  changeSort(param:string){
    this.sortBy.emit(param);
  }
}

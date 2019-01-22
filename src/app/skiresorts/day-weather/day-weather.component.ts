import { Weather } from './../Model/weather.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ski-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {
  @Input() vremena: Weather;

  constructor() { }

  ngOnInit() {
  }

}

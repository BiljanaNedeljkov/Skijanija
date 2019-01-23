import { Track } from './../Model/track.model';
import { SkiResortService } from './../service/ski-resort.service';
import { Component, OnInit } from '@angular/core';
import { Mount } from '../Model/mount.model';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../Model/weather.model';
import { Skipass } from '../Model/ski-pass.model';

@Component({
  selector: 'ski-ski-resort',
  templateUrl: './ski-resort.component.html',
  styleUrls: ['./ski-resort.component.css']
})
export class SkiResortComponent implements OnInit {
  mounts: Mount;
  tracks: Track[];
  weathers: Weather[];
  skipasses: Skipass[];
  params = {
    sort: ""
  };

  constructor(
    private service: SkiResortService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.refresh()
  }

  refresh(){
    this.route.params.subscribe(params => {
      const id = +params["id"];
      this.service.getMounts(id).subscribe(data => {
        this.mounts = data;
      });
      this.service.getTracks(id,this.params).subscribe(
        data => {
          this.tracks = data;
        }
      );
      this.service.getWeathers(id).subscribe(
        data => {
          this.weathers = data;
        }
      );
      this.service.getSkipasses(id).subscribe(
        data => {
          this.skipasses = data;
        }
      );
    });
  }

  changeSort(param){
    this.params.sort = param;
    this.refresh();
  }

}

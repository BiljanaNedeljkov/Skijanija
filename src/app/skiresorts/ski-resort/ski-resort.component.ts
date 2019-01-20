import { SkiResortService } from './../service/ski-resort.service';
import { Component, OnInit } from '@angular/core';
import { Mount } from '../Model/mount.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ski-ski-resort',
  templateUrl: './ski-resort.component.html',
  styleUrls: ['./ski-resort.component.css']
})
export class SkiResortComponent implements OnInit {
  mounts: Mount;

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
    })
  }

}

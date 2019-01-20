import { SkiResortService } from './../../skiresorts/service/ski-resort.service';
import { Skiresort } from './../../skiresorts/Model/ski-resort.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  skiresorts: Skiresort[];

  constructor(private service:SkiResortService) { }

  ngOnInit() {
    this.service.getSkiresorts().subscribe(data => {
      this.skiresorts = data;
    });
  }

}

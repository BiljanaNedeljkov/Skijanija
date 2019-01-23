import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './skiresorts/home/home.component';
import { AboutComponent } from './skiresorts/about/about.component';
import { SkiResortComponent } from './skiresorts/ski-resort/ski-resort.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TracksComponent } from './skiresorts/tracks/tracks.component';
import { WeatherComponent } from './skiresorts/weather/weather.component';
import { DayWeatherComponent } from './skiresorts/day-weather/day-weather.component';
import { SkiPassComponent } from './skiresorts/ski-pass/ski-pass.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'skiresorts/:id', component: SkiResortComponent},
  {path: '', redirectTo: '/skiresort', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkiResortComponent,
    TracksComponent,
    WeatherComponent,
    DayWeatherComponent,
    SkiPassComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

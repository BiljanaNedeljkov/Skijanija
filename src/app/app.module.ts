import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './skiresorts/home/home.component';
import { AboutComponent } from './skiresorts/about/about.component';
import { SkiResortComponent } from './skiresorts/ski-resort/ski-resort.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'skiresorts/:id',component: SkiResortComponent},
  {path:'', redirectTo:'skiresorts', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkiResortComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

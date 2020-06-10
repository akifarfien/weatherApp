import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherHeadComponent } from './weather-head/weather-head.component';
import { WeatherStatisticsComponent } from './weather-statistics/weather-statistics.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'home', component: AppComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: '**', redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

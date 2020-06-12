import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherHeadComponent } from './weather-head/weather-head.component';
import { WeatherStatisticsComponent } from './weather-statistics/weather-statistics.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'report', component: AppComponent},
  {path:'', redirectTo:'report', pathMatch:'full'},
  {path: '**', redirectTo: 'report', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

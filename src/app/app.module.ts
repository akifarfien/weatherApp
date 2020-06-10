import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHeadComponent } from './weather-head/weather-head.component';
import { WeatherStatisticsComponent } from './weather-statistics/weather-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHeadComponent,
    WeatherStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

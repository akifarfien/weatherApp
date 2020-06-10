import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHeadComponent } from './weather-head.component';

describe('WeatherHeadComponent', () => {
  let component: WeatherHeadComponent;
  let fixture: ComponentFixture<WeatherHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

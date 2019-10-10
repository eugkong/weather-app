import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  WEATHER_API_KEY = "476e23fe1116f4e69d2a3e68672604e1";
  model = new Weather("Singapore",0,0,0,"", 0,0);
  imageUrl = "https://www.nea.gov.sg/assets/images/map/base-853.png";
  city: string;
  country: string;
  imageurl: string;

  constructor(private weatherSvc: WeatherService,
    private activatedRoute: ActivatedRoute, 
      private router: Router) { }

  ngOnInit() {
    this.city = this.activatedRoute.snapshot.params.city;
    this.getWeatherFromAPI(this.activatedRoute.snapshot.params.city);
  }

  getWeatherFromAPI(city: string){
    Object.keys(this.weatherSvc.imgMapBasedCity).find(value=>{
      if(this.weatherSvc.imgMapBasedCity[value].city === city){
        this.imageUrl = this.weatherSvc.imgMapBasedCity[value].imageUrl;
      }
    })
    this.weatherSvc.getWeather(city, this.WEATHER_API_KEY).then((result)=>{
      this.model = new Weather(this.model.cityName, result.main.temp,result.main.pressure,result.main.humidity,result.weather[0].description,result.wind.deg,result.wind.speed);
    }).catch((error)=>{
      console.log(error);
    })
  }

  goBack(){
    this.router.navigate(['/']);
  }

}

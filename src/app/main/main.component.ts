import { Component, OnInit } from '@angular/core';
import { ITemperature } from './weather';
import { TemperatureService } from '../api-connection.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[TemperatureService],
})
export class MainComponent implements OnInit {
  
  temperature!: number ;
  constructor(private temperatureService: TemperatureService) {}
  temperatures: ITemperature =  <ITemperature>{};
  

  ngOnInit(): void {
    this.getWeather();  
  }

  getWeather() {
    const d = new Date();
    let hour = d.getHours();
    this.temperatureService.getWeather().subscribe((data)=> {
      this.temperatures = data;
      this.temperature = this.temperatures.hourly.temperature_2m[hour-1];
    });
  }

  getDate(){
      const d = new Date();
      let month = d.getMonth();
      let day = d.getDate();
      return (month+1  + "/" + day );
  }

  getMood(){
    let temperature: number =this.temperature;
    let mood = '';
    if(temperature<0){
      mood = "Freezy"
    }
    if(temperature >= 0 && temperature < 10){
      mood = 'Depressed';
    }
    if(temperature >= 10 && temperature <= 17){
      mood = 'Relaxed';
    }
    if(temperature >= 17 && temperature<= 25){
      mood = 'Happy';
    }
    if(temperature >= 25 && temperature<= 30){
      mood = 'Glowy';
    }
    if(temperature >= 30 && temperature<= 40){
      mood = 'Unbearable';
    }
    if(temperature > 40){
      mood = 'Boiled';
    }
    return mood;
  } 
  
}
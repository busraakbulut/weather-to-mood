import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ITemperature } from './main/weather';
import { Observable,tap,map } from 'rxjs';
@Injectable({
    providedIn:'root',
})
export class TemperatureService {
    getMoodByWeather(moods: string) {
      throw new Error('Method not implemented.');
    }

    constructor(private http: HttpClient) {}
    path=
        'https://api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m';
    getWeather() {
        return this.http
        .get(this.path)
        .pipe(map((response)=> response as ITemperature));
    }
}


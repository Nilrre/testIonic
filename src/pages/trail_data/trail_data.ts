import { NavParams, NavController } from 'ionic-angular';
import 'rxjs/Rx';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TrailInfoPage } from '../trail_info/trail_info';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
    selector: 'page-trails',
    templateUrl: 'trail_data.html'
})
export class TrailData {
    lat: number;
    lon: number;
    maxDistance: number;
    maxResults: number;
    sort: string;
    minLength: number;
    minStars: number;
    trails: any;
    private trailUrl: string;


    constructor(private http: Http, private navCtrl: NavController, private navParams: NavParams) {
        this.maxDistance = 10;
        this.maxResults = 20;
        this.sort = 'distance';
        this.minLength = 0;
        this.minStars = 0;
        // this.trailUrl = 'https://www.hikingproject.com/data/get-trails?key=200372161-2cd5a1a5849dd56b6f8cd1ed0e5e4443&lat=' + this.lat + '&lon=' + this.lon + '&maxDistance=' + this.maxDistance + '&maxResults=' + this.maxResults + '&sort=' + this.sort + '&minLength' + this.minLength + '&minStars' + this.minStars;
    }

    getTrails(lat, lon) {
        this.lat = lat;
        this.lon = lon;
        this.trailUrl = 'https://www.hikingproject.com/data/get-trails?key=200372161-2cd5a1a5849dd56b6f8cd1ed0e5e4443&lat=' + this.lat + '&lon=' + this.lon + '&maxDistance=' + this.maxDistance + '&maxResults=' + this.maxResults + '&sort=' + this.sort + '&minLength' + this.minLength + '&minStars' + this.minStars;
       return  this.http.get(this.trailUrl)
        .map(res => res.json().trails)
        .subscribe(data => {
            this.trails = data;
        });
    }

    loadInfo(latitude, longitude, type,
        summary, difficulty, stars, starVotes,
        location, name, conditionStatus, length, 
        ascent, descent, high, low, conditionDetails, 
        conditionDate, id){
            
        latitude = latitude || 40.7944;
        longitude = longitude || -111.8905;

        this.navCtrl.push(TrailInfoPage, {
            lon : longitude,
            lat: latitude,
            type: type,
            summary: summary,
            difficulty: difficulty,
            stars: stars,
            starVotes: starVotes,
            location: location,
            name: name,
            conditionStatus: conditionStatus,
            length: length,
            ascent: ascent,
            descent: descent,
            high: high,
            low: low,
            conditionDetails: conditionDetails,
            conditionDate: conditionDate,
            id: id
        });
      }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'page-trail_info',
  templateUrl: 'trail_info.html'
})
export class TrailInfoPage {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat: number;
  lng: number;
  id: string;
  type: string;
  summary: string;
  difficulty: string;
  stars: number;
  starVotes: number;
  location: string;
  name: string;
  conditionStatus: string;
  length: number;
  ascent: number;
  descent: number;
  high: number;
  low: number;
  conditionDetails: string;
  conditionDate: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    mapboxgl.accessToken = 'pk.eyJ1IjoidmVua2F0aXRvbiIsImEiOiJjaXhsdGZ2amIwMDQwMnFxdDdoMTZ3NHlpIn0.X9Zmsqs7wCS30_RGxa_Kzw';
    this.lat = navParams.get('lat');
    this.lng = navParams.get('lon');
    this.id = navParams.get('id');
    this.type = navParams.get('type');
    this.summary = navParams.get('summary');
    this.difficulty = navParams.get('difficulty');
    this.stars = navParams.get('stars');
    this.starVotes = navParams.get('starVotes');
    this.location = navParams.get('location');
    this.name = navParams.get('name');
    this.conditionStatus = navParams.get('conditionStatus');
    this.length = navParams.get('length');
    this.ascent = navParams.get('ascent');
    this.descent = navParams.get('descent');
    this.high = navParams.get('high');
    this.low = navParams.get('low');
    this.conditionDetails = navParams.get('conditionDetails');
    this.conditionDate = navParams.get('conditionDate');
  }


  ionViewDidLoad() {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom:14,
      pitch: 0,
      interactive: false,
      center: [this.lng, this.lat]
    });

    console.log(this.map);
  }
}
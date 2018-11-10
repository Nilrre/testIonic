import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { FilterSettingsPage } from '../filter_settings/filter_settings';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: number;
  lon: number;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
  }
   
  @ViewChild('trails') myTrails: any;

  ionViewDidLoad(){
    
  }

  ionViewWillEnter() {
    this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
        this.myTrails.getTrails(this.lat, this.lon);
     }).catch((error) => {
        alert(error);
     });
}
  filterSettings(){
    this.navCtrl.push(FilterSettingsPage, {});
  }
}
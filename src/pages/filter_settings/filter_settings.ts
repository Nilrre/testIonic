import { Component } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-filter_settings',
    templateUrl: 'filter_settings.html'
})
export class FilterSettingsPage{
    constructor(public navCtrl: NavController, private navParams: NavParams) {}

    saveSettings(){
        
    }

}
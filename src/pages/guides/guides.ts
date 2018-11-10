import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GuidesPage1Page } from '../guides_pages/guides-page1/guides-page1';
import { GuidesPage2Page } from '../guides_pages/guides-page2/guides-page2';
import { GuidesPage3Page } from '../guides_pages/guides-page3/guides-page3';
import { GuidesPage4Page } from '../guides_pages/guides-page4/guides-page4';
import { GuidesPage5Page } from '../guides_pages/guides-page5/guides-page5';
import { GuidesPage6Page } from '../guides_pages/guides-page6/guides-page6';
import { GuidesPage7Page } from '../guides_pages/guides-page7/guides-page7';

@Component({
    selector: 'page-guides',
    templateUrl: 'guides.html'
})
export class GuidesPage {
    constructor(public navCtrl: NavController) {
    }

    selectGuidesPage(number) {
        switch (number) {
            case 1:
                this.navCtrl.push(GuidesPage1Page, {});
                break;
            case 2:
                this.navCtrl.push(GuidesPage2Page, {});
                break;
            case 3:
                this.navCtrl.push(GuidesPage3Page, {});
                break;
            case 4:
                this.navCtrl.push(GuidesPage4Page, {});
                break;
            case 5:
                this.navCtrl.push(GuidesPage5Page, {});
                break;
            case 6:
                this.navCtrl.push(GuidesPage6Page, {});
                break;
            case 7:
                this.navCtrl.push(GuidesPage7Page, {});
                break;
            default:
        }
    }
}
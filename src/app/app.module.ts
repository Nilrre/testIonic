import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule  } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { TrailInfoPage } from '../pages/trail_info/trail_info';
import { TrailData } from '../pages/trail_data/trail_data';
import { FilterSettingsPage } from '../pages/filter_settings/filter_settings';
import { ChecklistPage } from '../pages/checklist/checklist';
import { GuidesPage } from '../pages/guides/guides';
import { GuidesPage1Page } from '../pages/guides_pages/guides-page1/guides-page1';
import { GuidesPage2Page } from '../pages/guides_pages/guides-page2/guides-page2';
import { GuidesPage3Page } from '../pages/guides_pages/guides-page3/guides-page3';
import { GuidesPage4Page } from '../pages/guides_pages/guides-page4/guides-page4';
import { GuidesPage5Page } from '../pages/guides_pages/guides-page5/guides-page5';
import { GuidesPage6Page } from '../pages/guides_pages/guides-page6/guides-page6';
import { GuidesPage7Page } from '../pages/guides_pages/guides-page7/guides-page7';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrailInfoPage,
    TrailData,
    FilterSettingsPage,
    ChecklistPage,
    GuidesPage,
    GuidesPage1Page,
    GuidesPage2Page,
    GuidesPage3Page,
    GuidesPage4Page,
    GuidesPage5Page,
    GuidesPage6Page,
    GuidesPage7Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrailData,
    TrailInfoPage,
    FilterSettingsPage,
    ChecklistPage,
    GuidesPage,
    GuidesPage1Page,
    GuidesPage2Page,
    GuidesPage3Page,
    GuidesPage4Page,
    GuidesPage5Page,
    GuidesPage6Page,
    GuidesPage7Page
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

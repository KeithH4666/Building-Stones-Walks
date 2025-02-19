import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { RestProvider } from '../providers/rest/rest';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  buildings: any;
  pages: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public restProvider: RestProvider) {
    this.initializeApp();
    this.getBuildings();
  
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getBuildings(){
    this.restProvider.getBuildings()
    .then(data => {
      this.buildings = data;
      console.log(this.buildings);
    });
  }
}

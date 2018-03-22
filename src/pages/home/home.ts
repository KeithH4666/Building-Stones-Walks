import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buildings: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getBuildings();
  }

  getBuildings() {
    this.restProvider.getBuildings()
    .then(data => {
      this.buildings = data;
      console.log(this.buildings);
    });
  }

}

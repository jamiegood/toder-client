import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';



console.log('Hello Auth Provider');


var myconfigX = {testing: 'fdfdsfdfds'};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(myconfigX);

  }

}

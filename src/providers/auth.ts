import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';



var myconfig ={
  test: 'testing1'
}
@Injectable()
export class Auth {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello Auth Provider');
    console.log(myconfig);
  }

  checkAuthentication() {

  }


  createAccount(account) {

  }

  login(user) {


   return new Promise( (resolve, reject) => {


     //this.http.post('')
   });

  }


  logout(){

  }

}

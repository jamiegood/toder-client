import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';





@Injectable()
export class Auth {


  public token: any;
  public myconfig: any;

  constructor(public http: Http, public storage: Storage) {

    this.myconfig ={
      test: 'testing1',
      'api_url': 'http://localhost:8080'
    }

    console.log('Hello Auth Provider');
    console.log(this.myconfig);
  }

  checkAuthentication(){

    return new Promise((resolve, reject) => {

        //Load token if exists
        this.storage.get('token').then((value) => {

            this.token = value;

            let headers = new Headers();
            headers.append('Authorization', this.token);

            this.http.get(this.myconfig.api_url + '/api/auth/protected', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });

        });

     });

  }


  createAccount(details){

      return new Promise((resolve, reject) => {

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          this.http.post(this.myconfig.api_url + '/api/auth/register', JSON.stringify(details), {headers: headers})
            .subscribe(res => {

              let data = res.json();
              this.token = data.token;
              this.storage.set('token', data.token);
              resolve(data);

            }, (err) => {
              reject(err);
            });

      });

    }

      login(credentials){

        return new Promise((resolve, reject) => {

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

          //  this.http.post('https://fierce-garden-37056.herokuapp.com/api/auth/login', JSON.stringify(credentials), {headers: headers})
            this.http.post(this.myconfig.api_url + '/api/auth/login', JSON.stringify(credentials), {headers: headers})
              .subscribe(res => {

                let data = res.json();
                this.token = data.token;
                this.storage.set('token', data.token);
                resolve(data);

                resolve(res.json());
              }, (err) => {
                reject(err);
              });

        });
      }



      logout(){
        this.storage.set('token', '');
      }

}

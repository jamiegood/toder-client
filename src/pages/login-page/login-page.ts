import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup-page/signup-page';
//import { MarkdownComponent } from '../../directives/markdown';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {


    email: string;
    password: string;
    loading: any;
    markdown: string;
    title: string;

    constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {


    //  this.title = "**testing** is the title";

      this.markdown = "";

      // setTimeout(() => {
      //   // this.markdown = `*testing* and this is another one **testing2** and this is
      //   // > ok this is another one`;
      //   this.markdown = this.title;
      // }, 1000);

    }

    onKey(event) {
      console.log(event);

      this.markdown =  event.target.value;
    }




    ionViewDidLoad() {

        this.showLoader();

        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            console.log("Not already authorized");
            this.loading.dismiss();
        });

    }

    login(){

        this.showLoader();

        let credentials = {
            email: this.email,
            password: this.password
        };

        console.log(credentials);

        this.authService.login(credentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });

    }

    launchSignup(){
        this.navCtrl.push(SignupPage);
    }

    showLoader(){

        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });

        this.loading.present();

    }

}

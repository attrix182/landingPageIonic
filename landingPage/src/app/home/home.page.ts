import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { User } from '../shared/user.class';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User = new User();

  constructor(private router: Router, private authSvc: AuthService, public alertCtrl: AlertController) { }

  ngOnInit() { }

  presentAlert() {
    let alert = this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Email or password invalid',
      message: 'Try again',
      buttons: ['OK']
    }).then(res => {

      res.present();
    });
  }

  async onLogin() {

    const user = await this.authSvc.onLogin(this.user)
    if (user) {
      console.log('Logueado!!');
      this.router.navigateByUrl('/principal');
    }
    else {
      this.presentAlert()
    }

  }



  Clear() {
    this.user.email = '';
    this.user.password = '';
  }



}

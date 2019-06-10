import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../modelos/user';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User; 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private _alertCtrl: AlertController) {
  }
  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    } catch (e) {
      //console.error(e);
      this._alertCtrl.create({
        title:'Falha no Login',
        subTitle: e,
        buttons : [
          {text: 'OK'}
        ]
      }).present();
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../modelos/user';
import { TabsPage } from '../tabs/tabs';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private _alertCtrl: AlertController,
              ) {
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    } catch (e) {
      console.error(e);
      this._alertCtrl.create({
        title:'Falha no Cadastro',
        subTitle: e,
        buttons : [
          {text: 'OK'}
        ]
      }).present();
    }
    }
  }



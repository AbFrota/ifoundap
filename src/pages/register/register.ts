import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../modelos/user';
//import { TabsPage } from '../tabs/tabs';
//import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AuthProvider,
              private _alertCtrl: AlertController,
              ) {
  }

 
  register(user:User){
    this.afAuth.register(this.user)
    .then((user: User) =>{
     this.navCtrl.push(EditarPerfilPage);
     
    })
    .catch((e) => {
        //console.error(e);
     this._alertCtrl.create({
       title:'Falha ao registrar',
       subTitle: e,
       buttons : [
         {text: 'OK'}
       ]
     }).present();
    }
    ); 
   }
  }



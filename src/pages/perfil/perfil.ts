import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private afAuth: AuthProvider,
     private toastrService: ToastrServiceProvider
     ) {
       
  }
usuarioLogado(){
  return this.afAuth.obtemUsarioLogado();
}

  singOut(){
    this.afAuth.singOut()
    .then(() => {
      this.navCtrl.setRoot(LoginPage);
      this.toastrService.show('voce saiu!', 3000)
                        .present();
    })
    .catch((erro: any) => {
      this.toastrService.show(erro, 6000)
      .present();
    });
  }
 
   
   
  }



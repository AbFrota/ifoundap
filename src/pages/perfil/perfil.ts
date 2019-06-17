import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Perfil } from '../../modelos/perfil';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public user: any;

  public perfilData: Observable<Perfil>

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private afAuth: AngularFireAuth,
     private authProvider: AuthProvider,
     private afDatabase: AngularFireDatabase,
     private toastrService: ToastrServiceProvider
     ) {
       
  }

teste(){
  const id = this.authProvider.currentUserId
   this.perfilData = this.afDatabase.object(`perfil/${id}`).valueChanges()
    console.log(this.perfilData)   
    return this.perfilData
    }



  singOut(){
    this.authProvider.singOut()
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



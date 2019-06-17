import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Perfil } from '../../modelos/perfil';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  perfil = {} as Perfil;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private afAuth: AngularFireAuth,
     private db: AngularFireDatabase) {
  }

  criarPerfil(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.db.object(`perfil/${auth.uid}`).set(this.perfil)
      .then(()=> this.navCtrl.setRoot(TabsPage))

    })
  }
  

}

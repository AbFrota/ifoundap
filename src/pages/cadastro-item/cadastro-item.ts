import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Item } from '../../modelos/ItemInterface';
import { HomePage } from '../home/home';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AngularFireAuth } from 'angularfire2/auth';
import { database } from 'firebase';
//import {  VibrationOriginal } from '@ionic-native/vibration'



@IonicPage()
@Component({
  selector: 'page-cadastro-item',
  templateUrl: 'cadastro-item.html',
})
export class CadastroItemPage {


  item = {  
    'nome': '',
   'desc': '',
    'data': '',
    'local':'',
   'fotos': 'assets/imgs/image.png',
   'perdido':'',
   'categ': '',
   'pontoEntg': 'Perdido', 
   'user': '',
   //'fileToUpload': '',
   //'imgPath' :'',
 };     

  
    constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private _alertCtrl: AlertController,
    public dbService: FirebaseServiceProvider,
    public toastrService: ToastrServiceProvider,
   // private _vibration:Vibration
   // private imagePicker: ImagePicker,
    ) {

}

 





    change(){
      console.log(this.item.perdido);
    }
 

    save(item: Item) {
      this.afAuth.authState.take(1).subscribe(data => {
        if (data && data.email && data.uid) {
          item.user = data.email        
        }
      });
      //this._vibration.vibrate(500);

      if (!item.nome || !item.desc || !item.local) {
        this._alertCtrl.create({
          title: 'Preenchimento obrigatório',
          subTitle: 'Preencha todos os campos!',
          buttons: [
            { text: 'ok' }
          ]
        }).present();
        return;
      }
     
    this.dbService.save(item)
    console.log(this.item);
    this.toastrService.show('Cadastrado com sucesso!', 3000)
                        .present();

      this.navCtrl.setRoot(HomePage);
    }

   
}

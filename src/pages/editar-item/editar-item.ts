import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-editar-item',
  templateUrl: 'editar-item.html',
})
export class EditarItemPage {

  item = {  
    //'categorias' : '',
    'nome': '',
   'desc': '',
    'data': '',
    'local':'',
   'fotos': '',
   'perdido':'', 
 };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider,
    public toastrService: ToastrServiceProvider
  ) {
    this.item = this.navParams.get('item');
  }

  update(item) {
    this.firebaseService.update(item).then(d => {
      this.toastrService.show('Atualizado com sucesso!', 3000)
                        .present();

      this.navCtrl.setRoot(HomePage);
    });
  }

  remove(item) {
    this.firebaseService.remove(item).then(d => {
      this.toastrService.show(' Removido com sucesso!', 3000)
                        .present();
      this.navCtrl.setRoot(HomePage);
    });
  }

}

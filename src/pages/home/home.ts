import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Item } from '../../modelos/ItemInterface';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { CadastroItemPage } from '../cadastro-item/cadastro-item';
import { EditarItemPage } from '../editar-item/editar-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private itens;

  constructor(
  public navCtrl: NavController,
  public dbService: FirebaseServiceProvider,
  public _loadingCtrl: LoadingController
  ) {
    let loading = this._loadingCtrl.create({
      content: 'Carregando...'

    }
    );  //view de "carregando para o usuário" 

    loading.present(); // mostrando   

  this.itens = this.dbService.getAll();
  loading.dismiss();
  
  }
  add(){
  this.navCtrl.push(CadastroItemPage);
  }
  goToSingle(item) {
    this.navCtrl.push(EditarItemPage, { 'item': item });
    }

}

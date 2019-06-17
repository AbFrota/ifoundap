import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../modelos/ItemInterface';
import { EditarItemPage } from '../editar-item/editar-item';



@IonicPage()
@Component({
  selector: 'page-visualizar-item',
  templateUrl: 'visualizar-item.html',
})



export class VisualizarItemPage {
  public item: Item;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.item =this.navParams.get('itemSelecionado');
  }

  selecionaItem(item : Item){
    this.navCtrl.push(EditarItemPage, {
      itemSelecionado: item
    }); // empilhamento de página
  }
}

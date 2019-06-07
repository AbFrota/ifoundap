import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Item } from '../../modelos/ItemInterface';
import { HomePage } from '../home/home';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { ImagePicker } from '@ionic-native/image-picker'



@IonicPage()
@Component({
  selector: 'page-cadastro-item',
  templateUrl: 'cadastro-item.html',
})
export class CadastroItemPage {

   
  item = {  
   //'categorias' : '',
   'nome': '',
  'desc': '',
   'data': '',
   'local':'',
  'fotos': '',
  'perdido':'', 
  'fileToUpload': '',
  'imgPath' :'',
};
  
    constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider,
    public toastrService: ToastrServiceProvider,
   // private imagePicker: ImagePicker,
    ) {
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
    }

 

    save(item: Item) {
    this.dbService.save(item)
    this.toastrService.show('Cadastrado com sucesso!', 5000)
                        .present();

      this.navCtrl.setRoot(HomePage);
    }

   /* pegarImagem() {
      this.imagePicker.getPictures({
        maximumImagesCount: 1, //Apenas uma imagem
        outputType: 1 //BASE 64
      })
        .then(results => {
          if (results.length > 0) {
            this.item.imgPath = 'data:image/png;base64,' + results[0];
            this.item.fileToUpload = results[0];
          } else {
            this.item.imgPath = '';
            this.item.fileToUpload = null;
          }
        })
        .catch(error => {
          console.error('Erro ao recuperar a imagem', error);
        });
    }

    escolherFoto() {
      this.imagePicker.hasReadPermission()
        .then(hasPermission => {
          if (hasPermission) {
            this.pegarImagem();
          } else {
            this.solicitarPermissao();
          }
        }).catch(error => {
          console.error('Erro ao verificar permissão', error);
        });
    }

    solicitarPermissao() {
      this.imagePicker.requestReadPermission()
        .then(hasPermission => {
          if (hasPermission) {
            this.pegarImagem();
          } else {
            console.error('Permissão negada');
          }
        }).catch(error => {
          console.error('Erro ao solicitar permissão', error);
        });
    }
  */


}

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Item } from '../../modelos/ItemInterface';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
//import { CadastroItemPage } from '../cadastro-item/cadastro-item';
//import { EditarItemPage } from '../editar-item/editar-item';
import { VisualizarItemPage } from '../visualizar-item/visualizar-item';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { LoginPage } from '../login/login';
import { Perfil } from '../../modelos/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  perfilData:FirebaseObjectObservable<Perfil>;
  
  private itens;

  constructor(
  public navCtrl: NavController,
  public dbService: FirebaseServiceProvider,
  public _loadingCtrl: LoadingController,
  private afAuth: AngularFireAuth,
  public toastrService: ToastrServiceProvider
  ) {
    let loading = this._loadingCtrl.create({
      content: 'Carregando...'

    }
    );  //view de "carregando para o usuário" 

    loading.present(); // mostrando   

  this.itens = this.dbService.getAll();
  loading.dismiss();
  
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.toastrService.show( 'Bem Vindo!',4000)
                        .present();
       
                    
      } else {
        this.navCtrl.push(LoginPage);
        this.toastrService.show('Usuário não encontrado!', 3000)
        .present();
      }
    });

  } 

 /* add(){
  this.navCtrl.push(CadastroItemPage);
  }
  goToSingle(item) {
    this.navCtrl.push(EditarItemPage, { 'item': item });
    }
*/
  selecionaItem(item : Item){
    this.navCtrl.push(VisualizarItemPage, {
      itemSelecionado: item
    }); // empilhamento de página
  }


}

import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CadastroItemPage } from '../cadastro-item/cadastro-item';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = CadastroItemPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}

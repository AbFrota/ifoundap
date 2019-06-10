import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { CadastroItemPage } from '../cadastro-item/cadastro-item';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = CadastroItemPage;
  tab3Root = LoginPage;

  constructor() {

  }
}

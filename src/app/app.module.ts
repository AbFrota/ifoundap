import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { CadastroItemPage } from '../pages/cadastro-item/cadastro-item';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrServiceProvider } from '../providers/toastr-service/toastr-service';
import { EditarItemPage } from '../pages/editar-item/editar-item';
import { CameraProvider } from '../providers/camera/camera';
import { ImagePicker } from '@ionic-native/image-picker'
import { VisualizarItemPage } from '../pages/visualizar-item/visualizar-item';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterPage } from '../pages/register/register';
import { RegisterPageModule } from '../pages/register/register.module';
import { PerfilPage } from '../pages/perfil/perfil';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { AngularFireObject } from "angularfire2/database";

import 'rxjs/add/operator/take';
import { Vibration } from '@ionic-native/vibration/ngx';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    PerfilPage,
    VisualizarItemPage,
    EditarItemPage,
    EditarPerfilPage,
    CadastroItemPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBtsRdLyHRR0w_nHNYxW7jwrNjgtJhxT4M",
      authDomain: "ifound-4f57e.firebaseapp.com",
      databaseURL: "https://ifound-4f57e.firebaseio.com",
      projectId: "ifound-4f57e",
      storageBucket: "ifound-4f57e.appspot.com",
      messagingSenderId: "983824202223",
     // appId: "1:983824202223:web:93d4dc03830bfab0",
      }),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      RegisterPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EditarItemPage,
    ContactPage,
    HomePage,
    RegisterPage,
    EditarPerfilPage,
    LoginPage,
    PerfilPage,
    VisualizarItemPage,
    CadastroItemPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    ToastrServiceProvider,
    CameraProvider,
    Vibration,
    AuthProvider
  ]
})
export class AppModule {}

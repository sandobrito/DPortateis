import { CadastrarNotasPage } from './../pages/cadastrar-notas/cadastrar-notas';

import { CadastroQuestoesPage } from './../pages/cadastro-questoes/cadastro-questoes';

import { CriarProvaPage } from './../pages/criar-prova/criar-prova';
import { RegistroProvider } from './../providers/registro/registro';
import { AlunoLogadoPage } from './../pages/aluno-logado/aluno-logado';
import { ProfessorLogadoPage } from './../pages/professor-logado/professor-logado';
import { RegistrarPage } from './../pages/registrar/registrar';
import { LoginPage } from './../pages/login/login';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";


import { MyApp } from './app.component';
import { DisciplinaProvider } from '../providers/disciplina/disciplina';


const firebaseConfig = {
  apiKey: "AIzaSyDKJekhwJSn5W8-xcsF_g10fMIPShJm8wM",
  authDomain: "negadocola.firebaseapp.com",
  databaseURL: "https://negadocola.firebaseio.com",
  projectId: "negadocola",
  storageBucket: "negadocola.appspot.com",
  messagingSenderId: "61196324193"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrarPage,
    ProfessorLogadoPage,
    AlunoLogadoPage,
    CriarProvaPage,
    CadastroQuestoesPage,
    CadastrarNotasPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrarPage,
    ProfessorLogadoPage,
    AlunoLogadoPage,
    CriarProvaPage,
    CadastroQuestoesPage,
    CadastrarNotasPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegistroProvider,
    DisciplinaProvider
  ]
})
export class AppModule {}

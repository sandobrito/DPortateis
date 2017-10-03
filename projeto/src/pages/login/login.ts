import { HomePage } from './../home/home';

import { CadastroPage } from './../cadastro/cadastro';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  user = {} as User;

  constructor(private afAuth : AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }


  async logar(user: User) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email ,  user.password);
      if(result){
        this.navCtrl.push(HomePage);
      }
      
    }catch (e){
      console.error(e);
    }
    
  }

  cadastro(){
    this.navCtrl.push(CadastroPage);
  }
}

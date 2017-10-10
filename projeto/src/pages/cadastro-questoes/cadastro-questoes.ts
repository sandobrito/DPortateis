import { Disciplina } from './../../models/disciplina';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CadastroQuestoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-questoes',
  templateUrl: 'cadastro-questoes.html',
})
export class CadastroQuestoesPage {
  items: FirebaseListObservable<any[]>;
  disciplina = {} as Disciplina;
  constructor(public navCtrl: NavController, public db:AngularFireDatabase) {
    this.items= db.list('/disciplina/questoes')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroQuestoesPage');
  }
  salvar(disciplina){
    if(this.disciplina.keyReference){
      return this.items.push(this.disciplina.prova);
    }else{
      
      
    }
    
  }

}

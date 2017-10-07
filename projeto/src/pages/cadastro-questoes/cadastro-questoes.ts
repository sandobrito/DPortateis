import { Disciplina } from './../../models/disciplina';
import { DisciplinaServiceProvider } from './../../providers/disciplina-service/disciplina-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  disciplina = {} as Disciplina;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private disciplinaService: DisciplinaServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroQuestoesPage');
  }

  salvar(){
    this.disciplinaService.saveQuestoes(this.disciplina.nome, this.disciplina.questoes);
    this.navCtrl.pop();
}



}

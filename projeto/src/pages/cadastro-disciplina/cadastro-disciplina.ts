import { Disciplina } from './../../models/disciplina';
import { FirebaseListObservable } from 'angularfire2/database';
import { DisciplinaServiceProvider } from './../../providers/disciplina-service/disciplina-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CadastroDisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-disciplina',
  templateUrl: 'cadastro-disciplina.html',
})
export class CadastroDisciplinaPage {

  items: FirebaseListObservable<any[]>;

  disciplina = {} as Disciplina;
  constructor(public navCtrl: NavController, public navParams: NavParams, private disciplinaService: DisciplinaServiceProvider) {
    
    this.disciplina.nome = '';
    this.disciplina.matricula = '';

    if(this.navParams.data.name){
      this.disciplina.nome = this.navParams.data.disciplina.name;

      this.disciplina.matricula = this.navParams.data.disciplina.matricula;
    }
    this.items = this.disciplinaService.getAll();

  }
  salvar(){
      this.disciplinaService.saveDisciplina(this.disciplina.nome, this.disciplina.matricula);
      this.navCtrl.pop();
  }


  

}

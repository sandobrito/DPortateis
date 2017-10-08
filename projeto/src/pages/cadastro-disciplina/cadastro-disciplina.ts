import { Disciplina } from './../../models/disciplina';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
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
  
  constructor(public navCtrl: NavController,  private disciplinaService: DisciplinaServiceProvider, db: AngularFireDatabase) {
    this.items = db.list('/disciplinas');
    
    
    }
    salvar(){
      this.items.push(this.disciplina);
      
    }
    

}
  


  



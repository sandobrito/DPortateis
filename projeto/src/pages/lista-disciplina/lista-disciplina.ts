import { Disciplina } from './../../models/disciplina';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ListaDisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-disciplina',
  templateUrl: 'lista-disciplina.html',
})
export class ListaDisciplinaPage {

  items: FirebaseListObservable<any[]>;
  disciplina = {} as Disciplina;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.items = db.list('/disciplinas');
  }
  

  
}

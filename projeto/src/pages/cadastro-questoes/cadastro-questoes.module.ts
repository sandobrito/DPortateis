import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroQuestoesPage } from './cadastro-questoes';

@NgModule({
  declarations: [
    CadastroQuestoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroQuestoesPage),
  ],
})
export class CadastroQuestoesPageModule {}

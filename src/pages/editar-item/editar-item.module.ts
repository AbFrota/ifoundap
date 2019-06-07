import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarItemPage } from './editar-item';

@NgModule({
  declarations: [
    EditarItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarItemPage),
  ],
})
export class EditarItemPageModule {}

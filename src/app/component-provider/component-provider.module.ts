import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiseaseItemComponent } from '../disease-item/disease-item.component';

@NgModule({
  declarations: [DiseaseItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [DiseaseItemComponent]
})
export class ComponentProviderModule { }
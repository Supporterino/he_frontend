import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { ComponentProviderModule } from '../component-provider/component-provider.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ComponentProviderModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule { }

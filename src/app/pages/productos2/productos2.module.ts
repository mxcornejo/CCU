import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Productos2Page } from './productos2.page';
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
  {
    path: '',
    component: Productos2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Productos2Page]
})
export class Productos2PageModule {}

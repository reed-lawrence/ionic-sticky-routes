import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TestModalPage } from './test-modal.page';

import { MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [TestModalPage],
  entryComponents: [TestModalPage]
})
export class TestModalPageModule { }

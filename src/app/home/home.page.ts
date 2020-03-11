import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestModalPage } from '../test-modal/test-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController
  ) { }

  async launchTestModal() {
    const modal = await this.modalController.create({
      component: TestModalPage
    });

    return modal.present();
  }

}

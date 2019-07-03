import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContatoModalPage } from '../contato-modal/contato-modal.page';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ContatoServiceService } from '../services/contato-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  contatos: any;

  constructor(public modalController: ModalController, private storage: Storage,
    private http: HttpClient, public loadingController: LoadingController,
    private contatoService: ContatoServiceService) {

    this.contatos = [];

    //Loading
    this.loadingController.create({
      message: 'Hellooo',
    }).then((loader) => {
      loader.present();
      // retorna o observeibon
      this.contatoService.list().subscribe(
        (data) => {
          this.contatos = data;
          loader.dismiss();
        }
      )
    });
  }

  add(contato) {
    //post para essa url ai, desse contato ai
    //Loading
    this.loadingController.create({
      message: 'OK',
    }).then((loader) => {
      loader.present();
      // retorna o observeibon
      this.contatoService.add(contato).subscribe(
        (data) => {
          this.contatos.push(data)
          loader.dismiss();
        }
      )
    });
  }

  remove(contato) {
    //Loading
    this.loadingController.create({
      message: 'REMOVIDO COM SUCESSO',
    }).then((loader) => {
      loader.present();
      // retorna o observeibon
      this.contatoService.remove(contato).subscribe(
        (data) => {
          var i = this.contatos.indexOf(contato);
          this.contatos.splice(i, 1);
          loader.dismiss();
        }
      )
    });
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ContatoModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((contato) => {
      this.add(contato.data)
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Acomodacao } from '../../components/models/acomodacao';

/**
 * Generated class for the AcomodacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acomodacao',
  templateUrl: 'acomodacao.html',
})
export class AcomodacaoPage {

  acomodacao: Acomodacao;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.acomodacao = navParams.get('acomodacao')
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { quartos } from '../../app/data';
import { Acomodacao } from '../../components/models/acomodacao';

/**
 * Generated class for the MapaOcupacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'mapa-ocupacao'
})
@Component({
  selector: 'page-mapa-ocupacao',
  templateUrl: 'mapa-ocupacao.html',
})
export class MapaOcupacaoPage {
  acomodacoes: Acomodacao[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.acomodacoes = quartos;
  }

  click(acomodacao: Acomodacao) {
    this.navCtrl.push('Acomodacao', { acomodacao, 'descricao': acomodacao.descricao });
  }

}

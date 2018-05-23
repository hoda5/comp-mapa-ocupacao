import { Component, Input } from '@angular/core';
import { global } from '../../app/global'
import { User } from '../models/user';

@Component({
  selector: 'pode',
  templateUrl: 'pode.html'
})
export class PodeComponent {

  _role: string;
  temPermissao: boolean;
  usuarioLogado: User;

  @Input()
  set role(role: string) {
    this._role = role;
    this.verificaPermissao();
  }

  get role(): string {
    return this._role;
  }

  constructor() {
    this.usuarioLogado = global._usuarioLogado;
  }

  verificaPermissao() {
    if(this.usuarioLogado && this.usuarioLogado.roles)
      if(this.usuarioLogado.roles.indexOf(this._role) != -1)
        this.temPermissao = true;
      else
        this.temPermissao = false;
  }
}

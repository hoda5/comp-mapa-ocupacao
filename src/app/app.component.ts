import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { MapaOcupacaoPage } from '../pages/mapa-ocupacao/mapa-ocupacao';
import { User } from '../components/models/user';
import { users } from './data';
import { global } from './global';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = MapaOcupacaoPage;
  pages: Array<{title: string, component: any}>;
  userLogged: String;
  users: User[];

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Mapa Ocupação', component: MapaOcupacaoPage },
    ];

    this.userLogged = "maria";
    this.users = users;

    let usuario = this.users.find((user) => user.nome == this.userLogged);

    if(usuario)
      global.setUsuarioLogado(usuario);

    if(global.getUsuarioLogado()) {
      this.rootPage = MapaOcupacaoPage;
    }
    else {
      this.rootPage = HomePage;
    }
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}


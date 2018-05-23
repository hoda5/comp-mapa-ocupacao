import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapaOcupacaoPage } from '../pages/mapa-ocupacao/mapa-ocupacao';
import { AcomodacaoPage } from '../pages/acomodacao/acomodacao';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaOcupacaoPage,
    AcomodacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {},
      {
        links: [
          {component: HomePage, name: 'Home', segment: 'home'},
          {component: MapaOcupacaoPage, name: 'MapaOcupacao', segment: 'mapa-ocupacao'},
          {component: AcomodacaoPage, name: 'Acomodacao', segment: 'acomodacao/:descricao'},
        ]
      }
    ),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaOcupacaoPage,
    AcomodacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

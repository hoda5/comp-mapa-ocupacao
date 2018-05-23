import { NgModule, ModuleWithProviders } from '@angular/core';
import { QuartosProvider } from './providers/quartos';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [],
    exports: []
})
export class QuartosModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: QuartosModule,
            providers: [QuartosProvider]
        };
    }
}

import { NgModule } from '@angular/core';
import { QuartosProvider } from './providers/quartos';
import { IonicModule } from 'ionic-angular';
var QuartosModule = (function () {
    function QuartosModule() {
    }
    QuartosModule.forRoot = function () {
        return {
            ngModule: QuartosModule,
            providers: [QuartosProvider]
        };
    };
    QuartosModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    QuartosModule.ctorParameters = function () { return []; };
    return QuartosModule;
}());
export { QuartosModule };
//# sourceMappingURL=quartos.module.js.map
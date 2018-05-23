import { NgModule } from '@angular/core';
import { PodeComponent } from './pode/pode';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [PodeComponent],
	imports: [CommonModule],
	exports: [PodeComponent]
})
export class ComponentsModule {}

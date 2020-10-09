import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';
import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenFormsRoutingModule,
  ],
  exports: [
    TemplateDrivenFormsComponent
  ],
  declarations: [
    TemplateDrivenFormsComponent
  ],
  providers: [
  ],
})
export class TemplateDrivenFormsModule { }

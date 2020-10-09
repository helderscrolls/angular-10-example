import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    SmartphoneComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ],
  exports: [
    ComponentsComponent,
  ],
  providers: [
  ],
})
export class ComponentsModule { }

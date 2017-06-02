import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {A2CardComponent}  from './card.component';

@NgModule({
  declarations: [ A2CardComponent ],
  imports: [CommonModule ],
  exports: [ A2CardComponent]
})
export class CardModule { }
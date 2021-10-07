import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    FormsModule,
  ],
  declarations: [
  ],
  exports: [
    CustomMaterialModule,
  ],
})
export class SharedModule {
}

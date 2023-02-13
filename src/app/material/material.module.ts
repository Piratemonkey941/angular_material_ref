import { NgModule } from '@angular/core';
import {MatButtonModule, } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import {  } from '';

const MaterialComponants =
[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,

]

@NgModule({
  exports:
    [
      MaterialComponants,

    ],
    imports:
    [
      MaterialComponants,
    ]
})
export class MaterialModule { }

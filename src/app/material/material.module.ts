import { NgModule } from '@angular/core';
import {MatButtonModule, } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import {DomSanitizer} from '@angular/platform-browser';
// import {MatIconRegistry} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
// import {  } from '';

const MaterialComponants =
[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  // DomSanitizer,
  // MatIconRegistry
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

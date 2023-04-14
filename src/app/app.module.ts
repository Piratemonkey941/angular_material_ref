import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, CustomSnackBarComponant } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';


// import {  } from '';

@NgModule({
  declarations: [
    AppComponent,
    CustomSnackBarComponant,
    // DialogComponent
  ],

  // entryComponents: [
  //   CustomSnackBarComponant,
  //   DialogComponent
  // ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

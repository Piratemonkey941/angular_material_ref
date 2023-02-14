import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material demo';

  notifications = 7;
  showSpinner = false;
  opened = false;

  logChange(index: any) {
    console.log(index)
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }

  log(state: any) {
    console.log(state)
  }


}

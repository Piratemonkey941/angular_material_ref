import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
  //   iconRegistry.addSvgIcon(
  //     'thumbs-up',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  // }
  title = 'ng_material';
}

import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-contacto',
  templateUrl: './page-contacto.component.html',
  styleUrls: ['./page-contacto.component.scss']
})
export class PageContactoComponent {

  faPhone = faPhone
  faEnvelope = faEnvelope
  faMapLocation = faMapLocation

}

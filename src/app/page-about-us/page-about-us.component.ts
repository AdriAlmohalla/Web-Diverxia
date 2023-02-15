import { Component } from '@angular/core';
import { faHandHoldingHeart, faArrowsToCircle, faA, faUserDoctor, faPhone, faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-about-us',
  templateUrl: './page-about-us.component.html',
  styleUrls: ['./page-about-us.component.scss']
})
export class PageAboutUsComponent {

  faHandHoldingHeart = faHandHoldingHeart
  faUserDoctor = faUserDoctor
  faArrowsToCircle = faArrowsToCircle
  faA = faA
  faPhone = faPhone
  faEnvelope = faEnvelope
  faMapLocation = faMapLocation

}

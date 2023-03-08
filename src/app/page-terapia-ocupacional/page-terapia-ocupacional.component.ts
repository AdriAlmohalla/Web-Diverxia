import { Component } from '@angular/core';
import { faBrain, faTruckMedical, faChildReaching, faHeart, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-page-terapia-ocupacional',
  templateUrl: './page-terapia-ocupacional.component.html',
  styleUrls: ['./page-terapia-ocupacional.component.scss']
})
export class PageTerapiaOcupacionalComponent {

  faBrain = faBrain
  faTruckMedical = faTruckMedical
  faHandshake = faHandshake
  faChildReaching = faChildReaching
  faHeart = faHeart
  faPeopleArrows = faPeopleArrows
}

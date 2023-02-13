import { Component } from '@angular/core';
import { faBrain, faTruckMedical, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { faHandLizard, faHandshake } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  faBrain = faBrain
  faHandLizard = faHandLizard
  faTruckMedical = faTruckMedical
  faHandshake = faHandshake
  faFlagCheckered = faFlagCheckered

}

import { Component } from '@angular/core';
import { faUserDoctor, faStethoscope, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-neuropsicologia',
  templateUrl: './page-neuropsicologia.component.html',
  styleUrls: ['./page-neuropsicologia.component.scss']
})
export class PageNeuropsicologiaComponent {

  faUserDoctor = faUserDoctor
  faStethoscope = faStethoscope
  faBriefcaseMedical = faBriefcaseMedical

}

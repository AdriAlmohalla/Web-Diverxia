import { Component } from '@angular/core';
import { faHandsPraying, faChildren, faLungs, faPersonHalfDress } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-fisioterapia',
  templateUrl: './page-fisioterapia.component.html',
  styleUrls: ['./page-fisioterapia.component.scss']
})
export class PageFisioterapiaComponent {

  faHandsPraying = faHandsPraying
  faChildren = faChildren
  faLungs = faLungs
  faPersonHalfDress = faPersonHalfDress

}

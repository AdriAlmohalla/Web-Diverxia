import { Component } from '@angular/core';
import { faBabyCarriage, faPersonHalfDress, faDesktop, faHouse, faPhone, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-page-logopedia',
  templateUrl: './page-logopedia.component.html',
  styleUrls: ['./page-logopedia.component.scss']
})
export class PageLogopediaComponent {

  faBabyCarriage = faBabyCarriage
  faPersonHalfDress = faPersonHalfDress
  faDesktop = faDesktop
  faHouse = faHouse
  faPhone = faPhone
  faCalendarWeek = faCalendarWeek
  faThumbsUp = faThumbsUp

}
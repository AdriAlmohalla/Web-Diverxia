import { Component } from '@angular/core';

declare let gtag: Function;
declare let loadGoogleAnalytics: Function;

@Component({
  selector: 'app-page-politica-cookies',
  templateUrl: './page-politica-cookies.component.html',
  styleUrls: ['./page-politica-cookies.component.scss']
})
export class PagePoliticaCookiesComponent {

  constructor() { }

  acceptCookies(event: Event) {
    event.preventDefault();
    localStorage.setItem('cookies_accepted', 'true');
    loadGoogleAnalytics();
  }

  rejectCookies(event: Event) {
    event.preventDefault();
    localStorage.setItem('cookies_accepted', 'false');
    this.deleteAllCookies();
  }

  deleteAllCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
  }
}

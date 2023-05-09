import { Component } from '@angular/core';

declare const loadGoogleAnalytics: any;

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {

  showBanner = !localStorage.getItem('cookie-consent');
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  acceptCookiesFromModal() {
    this.acceptCookies();
    this.closeModal();
  }

  rejectCookies() {
    localStorage.setItem('cookie-consent', 'rejected');
    this.closeModal();
    this.showBanner = false;
  }

  acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    this.showBanner = false;
    loadGoogleAnalytics();
  }

  configure() {
    // Abre el modal para configurar las cookies
    this.openModal();
  }

}

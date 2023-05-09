import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageLogopediaComponent } from './page-logopedia/page-logopedia.component';
import { PageTarifasComponent } from './page-tarifas/page-tarifas.component';
import { PageContactoComponent } from './page-contacto/page-contacto.component';
import { PagePedagogiaComponent } from './page-pedagogia/page-pedagogia.component';
import { PagePsicologiaComponent } from './page-psicologia/page-psicologia.component';
import { PageFisioterapiaComponent } from './page-fisioterapia/page-fisioterapia.component';
import { PageAtencionTempranaComponent } from './page-atencion-temprana/page-atencion-temprana.component';
import { PageTerapiaOcupacionalComponent } from './page-terapia-ocupacional/page-terapia-ocupacional.component';
import { PageAvisoLegalComponent } from './page-aviso-legal/page-aviso-legal.component';
import { PagePoliticaCookiesComponent } from './page-politica-cookies/page-politica-cookies.component';
import { PagePoliticaPrivacidadComponent } from './page-politica-privacidad/page-politica-privacidad.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNeuropsicologiaComponent } from './page-neuropsicologia/page-neuropsicologia.component';
import { PagePeritajeComponent } from './page-peritaje/page-peritaje.component';

// Importa NgcCookieConsentModule
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { environment } from '../environments/environments';
import { CookieBannerComponent } from './componenets/cookie-banner/cookie-banner.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.production ? 'www.logopedasarasanchezortigosa.com' : 'localhost'
  },
  position: 'bottom',
  theme: 'block',
  palette: {
    popup: {
      background: '#000000',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#f1d600',
      text: '#000000',
      border: 'transparent'
    }
  },
  type: 'info',
  content: {
    header: 'Cookies utilizadas en este sitio web',
    message: 'Este sitio web utiliza cookies propias y de terceros para fines analíticos y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación (por ejemplo, páginas visitadas).',
    dismiss: 'Aceptar',
    deny: 'Rechazar',
    link: 'Más información',
    href: 'https://sara-beta.vercel.app/politica-de-cookies',
    policy: 'Política de cookies'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PageAboutUsComponent,
    PageLogopediaComponent,
    PageTarifasComponent,
    PageContactoComponent,
    PagePedagogiaComponent,
    PagePsicologiaComponent,
    PageFisioterapiaComponent,
    PageAtencionTempranaComponent,
    PageTerapiaOcupacionalComponent,
    PageAvisoLegalComponent,
    PagePoliticaCookiesComponent,
    PagePoliticaPrivacidadComponent,
    PageNeuropsicologiaComponent,
    PagePeritajeComponent,
    CookieBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    // Importa NgcCookieConsentModule.forRoot(cookieConfig)
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

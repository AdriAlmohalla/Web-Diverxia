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
    PageTerapiaOcupacionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

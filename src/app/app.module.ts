import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { NgParticlesModule } from "ng-particles";
import { ServiceCardComponent } from './components/portfolio/service-card/service-card.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceCardComponent } from './components/about/experience-card/experience-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestResumeModalComponent } from './components/header/request-resume-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    ServiceCardComponent,
    AboutComponent,
    ExperienceCardComponent,
    ContactComponent,
    RequestResumeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgParticlesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

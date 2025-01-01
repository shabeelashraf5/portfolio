import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';
import { ExpertiseComponent } from './components/expertise/expertise.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SkillsComponent,
    WorksComponent,
    FooterComponent,
    ContactComponent,
    ChatbotComponent,
    ExpertiseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}

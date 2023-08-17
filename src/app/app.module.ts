import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SgbComponent } from './components/sgb/sgb.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EventsComponent } from './components/events/events.component';
import { ApplicationComponent } from './components/application/application.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LearningCenterComponent } from './components/learning-center/learning-center.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SgbComponent,
    TeachersComponent,
    CurriculumComponent,
    SignInComponent,
    SignUpComponent,
    EventsComponent,
    ApplicationComponent,
    HeaderComponent,
    LearningCenterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

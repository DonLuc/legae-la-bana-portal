import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplicationComponent } from "./components/application/application.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CurriculumComponent } from "./components/curriculum/curriculum.component";
import { EventsComponent } from "./components/events/events.component";
import { HomeComponent } from "./components/home/home.component";
import { LearningCenterComponent } from "./components/learning-center/learning-center.component";
import { SgbComponent } from "./components/sgb/sgb.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { TeachersComponent } from "./components/teachers/teachers.component";

const appRoutes: Routes = [
  {path: "", redirectTo:"/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "curriculum", component: CurriculumComponent},
  {path: "sgb", component: SgbComponent},
  {path: "signin", component: SignInComponent},
  {path: "signup", component: SignUpComponent},
  {path: "teachers", component: TeachersComponent},
  {path: "events", component: EventsComponent},
  {path: "application", component: ApplicationComponent},
  {path: "center", component: LearningCenterComponent},


];
@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {



}
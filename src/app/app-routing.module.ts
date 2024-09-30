import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'profile' , component: DashboardComponent},
  {path: 'skills' , component: SkillsComponent},
  {path: 'projects', component: WorksComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'profile', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

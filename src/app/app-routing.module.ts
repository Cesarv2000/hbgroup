import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { BrochureComponent } from './brochure/brochure.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactComponent } from './contact/contact.component';
import { AltaespecificacionComponent } from './altaespecificacion/altaespecificacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'team', component: TeamComponent},
  {path: 'brochure', component: BrochureComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'altaespecificacion', component: AltaespecificacionComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

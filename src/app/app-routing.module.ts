import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './petlist/petlist.component';
import { PetDetailComponent } from './petdetail/petdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/petlist', pathMatch: 'full' },
  { path: 'petlist', component: PetListComponent },
  { path: 'petdetail/:id', component: PetDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetlistComponent } from './petlist/petlist.component';
import { PetdetailComponent } from './petdetail/petdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/petlist', pathMatch: 'full' },
  { path: 'petlist', component: PetlistComponent },
  { path: 'petdetail/:id', component: PetdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

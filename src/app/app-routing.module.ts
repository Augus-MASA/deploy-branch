import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsViewComponent } from './details-view/details-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '/details-view',
    component : DetailsViewComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

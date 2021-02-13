import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudContainerComponent } from './controllers/crud/crud.container';


const routes: Routes = [
  {
    path: '',
    component: CrudContainerComponent
  },
  {
    path: 'trending',
    component: CrudContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

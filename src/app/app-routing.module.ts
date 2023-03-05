import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialLoadComponent } from './initial-load/initial-load.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  Routes = [
    {
      path: '/load',
      component: InitialLoadComponent
    }
  ]
}

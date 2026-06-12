import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./component/list-tournaments/list-tournaments.component').then((m) => m.ListTournamentsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }

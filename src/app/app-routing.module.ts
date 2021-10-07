import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // { path: '', pathMatch: 'full', redirectTo: '/forms-tasks' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

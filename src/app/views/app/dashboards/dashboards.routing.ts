import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './dashboards.component';
import { DefaultComponent } from './default/default.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      {
        path: 'default',
        component: DefaultComponent,
        // data: { roles: [UserRole.Admin] },
      },
     
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}

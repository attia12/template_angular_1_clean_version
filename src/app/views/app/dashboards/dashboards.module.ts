import { NgModule } from '@angular/core';

import { DefaultComponent } from './default/default.component';

import { DashboardsComponent } from './dashboards.component';
import { DashboardsRoutingModule } from './dashboards.routing';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [ DefaultComponent,  DashboardsComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    
    DashboardsRoutingModule,
    
  ]
})
export class DashboardsModule { }

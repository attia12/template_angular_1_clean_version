import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';

import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { HomeComponent } from './home/home.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
   
    ComponentsCarouselModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    HeadroomModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
})
export class ViewsModule {}

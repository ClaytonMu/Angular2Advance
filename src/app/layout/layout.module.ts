import { ChartsModule } from './charts/charts.module';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ChartsModule
  ],
  declarations: [
    LayoutComponent,
    CardsComponent,
    DashboardComponent
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { ChartsModule as chartjsModule } from 'ng2-charts';
// import { NgxEchartsModule } from "ngx-echarts";

@NgModule({
  declarations: [MainComponent, Dashboard2Component, Dashboard3Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    //NgxEchartsModule
  ]
})
export class DashboardModule { }

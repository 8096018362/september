import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChartsRoutingModule } from "./charts-routing.module";
// import { EchartComponent } from "./echart/echart.component";
import { MorrisComponent } from "./morris/morris.component";
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { SparklineComponent } from "./sparkline/sparkline.component";
import { KnobComponent } from "./knob/knob.component";
import { ApexchartComponent } from "./apexchart/apexchart.component";
// import { NgxEchartsModule } from "ngx-echarts";
import { ChartsModule as chartjsModule } from 'ng2-charts';
import { MorrisJsModule } from 'angular-morris-js';


@NgModule({
  declarations: [
    //  EchartComponent,  
    MorrisComponent,
    ChartjsComponent,
    SparklineComponent,
    KnobComponent,
    ApexchartComponent,
  ],
  imports: [CommonModule, ChartsRoutingModule,
    //NgxEchartsModule,
    chartjsModule, MorrisJsModule]
})
export class ChartsModule { }

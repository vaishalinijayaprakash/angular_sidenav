import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SharedModule } from './modules/shared/shared.module';
import { HelpComponent } from './components/help/help.component';
import { ChartComponent } from './components/chart/chart.component';
import { LineChart2Component } from './components/line-chart2/line-chart2.component';
import { LineChart3Component } from './components/line-chart3/line-chart3.component';
import { LineChart4Component } from './components/line-chart4/line-chart4.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    SideBarComponent,
    HelpComponent,
    ChartComponent,
    LineChart2Component,
    LineChart3Component,
    LineChart4Component,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

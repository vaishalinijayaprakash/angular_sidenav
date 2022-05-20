import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      options:{
   scales:{
      xAxes:[
        {
          ticks:{
            display:false
          }
        }
      ]
   }
      },
      data: {
          datasets: [{
              //label: 'Current Vallue',
               data: [0, 20, 40, 50],
              backgroundColor: "rgb(115 185 243 / 65%)",
              //borderColor: "#007ee7",
              fill: false,
          },
          {
            //label: 'Invested Amount',
             data: [0, 20, 40, 60, 80],
            backgroundColor: "#47a0e8",
            //borderColor: "#007ee7",
            fill: false,
        }],
         // labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
  });
  }
  constructor() { }

  ngOnInit(): void {
  }

}

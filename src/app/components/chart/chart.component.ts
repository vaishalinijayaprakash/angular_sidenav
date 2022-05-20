import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit,AfterViewInit {
canvas:any;
ctx:any;
@ViewChild('mychart') mychart:any
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [200, 300, 280, 340, 369],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              barThickness: 13,  // number (pixels) or 'flex'
          maxBarThickness: 8, 
              fill: true,
          },
          {
            label: 'Invested Amount',
            data: [140, 250, 380, 200, 289],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
            barThickness: 13,  // number (pixels) or 'flex'
            maxBarThickness: 8, 
        }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019', "may 2019"]
      },
  });
  }
}

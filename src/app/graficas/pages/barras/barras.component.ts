import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

	public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#BE8FFA', hoverBackgroundColor: 'blue' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#97A0F5', hoverBackgroundColor: 'blue' },
    { data: [18, 38, 45, 25, 26, 17, 20], label: 'Series C', backgroundColor: '#8FD2FA', hoverBackgroundColor: 'blue' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values

    this.barChartData.forEach(resp => {	
	    resp.data = [
	      Math.round(Math.random() * 100),
	      Math.round(Math.random() * 100),
	      Math.round(Math.random() * 100),
	      Math.round(Math.random() * 100),
	      Math.round(Math.random() * 100),
	      Math.round(Math.random() * 100),
	      Math.round(Math.random() * 100),      
	    ];
    });

  }

}

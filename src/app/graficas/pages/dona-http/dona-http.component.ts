import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

	public doughnutChartLabels: Label[] = [
		// 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
	];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
  	{
  		backgroundColor: [
  			'#EDAF68',
				'#FA7170',
				'#AD6EE0',
				'#6DA8F7',
				'#68EDB5'
  		]
  	}
  ]

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
  	// this.graficasService.getUsuariosRedesSociales()
  	// 	.subscribe(data => {
  	// 		const labels = Object.keys(data);
  	// 		const values = Object.values(data);

  	// 		this.doughnutChartLabels = labels;
  	// 		this.doughnutChartData.push(values);
  	// 	});

  	this.graficasService.getUsuariosRedesSocialesData()
  		.subscribe(({labels, values}) => {
  			this.doughnutChartLabels = labels;
  			this.doughnutChartData.push(values);
  		});
  }

}

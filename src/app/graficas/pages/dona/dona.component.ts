import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
  	{
  		backgroundColor: [
  			'#BE8FFA',
				'#97A0F5',
				'#8FD2FA'
  		]
  	}
  ]

}
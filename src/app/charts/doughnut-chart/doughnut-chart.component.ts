import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      display: true,
    },
    cutoutPercentage: 70,
  };
  public doughnutChartLabels: Label[] = ["done", "pending", "to do"];
  public doughnutChartData: SingleDataSet = [10, 10, 10];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#161414', '#C2988F', '#1C7117'] },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
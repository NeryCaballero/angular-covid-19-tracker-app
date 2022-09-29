import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit, OnChanges {

  @Input() country: string = 'Panama';

  barChartData: ChartDataSets[] = [{
    data: [64, 59, 80]
  }];
  barChartLabels: Label[] = ['USA', 'PAN', 'BE'];
  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.country);
  }

}

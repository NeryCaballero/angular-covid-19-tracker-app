import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getCountryData();
  }

  getCountryData() {
    this.dataService.getCountryDataByDate(this.country, 'from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
    .subscribe(
      (response: any) => {
        console.log('Response', response);
      }
    );
  }

}

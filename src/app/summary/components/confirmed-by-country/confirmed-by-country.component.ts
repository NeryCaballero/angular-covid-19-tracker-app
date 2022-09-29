import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmed-by-country',
  templateUrl: './confirmed-by-country.component.html',
  styleUrls: ['./confirmed-by-country.component.css']
})
export class ConfirmedByCountryComponent implements OnInit {

  @Output() countryToSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  passCountryData(searchTerm: string) {
    this.countryToSearch.emit(searchTerm);
  }

}


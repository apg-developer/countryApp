import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries-services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {

  }

  public searchByCountry(input: string): void {
    this.countriesService.searchByCountry(input).subscribe(response => {
      this.countries = response;
    });
  }
}

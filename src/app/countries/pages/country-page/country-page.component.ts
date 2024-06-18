import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries-services';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private activatedRouter: ActivatedRoute, private countriesService: CountriesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(switchMap(
        ({ id }) => this.countriesService.searchByAlphaCode(id)),
      )
      .subscribe((ctr) => {
        if (!ctr) return this.router.navigateByUrl('');
        return this.country = ctr;
      });
  }

}

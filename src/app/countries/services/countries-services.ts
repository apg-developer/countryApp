import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private urlBase: string = 'https://restcountries.com';
  private byCapitalEndPoint = 'v3.1/capital';
  private byCountryEndPoint = 'v3.1/name';
  private byRegionEndPoint = 'v3.1/region';
  private byAlphaCode = 'v3.1/alpha';

  constructor(private httpClient: HttpClient) { }

  public searchByCapital(capitalName: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>
      (`${this.urlBase}/${this.byCapitalEndPoint}/${capitalName}`)
      .pipe(catchError(() => {
        return of([]);
      }));
  }

  public searchByCountry(countryName: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>
      (`${this.urlBase}/${this.byCountryEndPoint}/${countryName}`)
      .pipe(catchError(() => {
        return of([]);
      }));
  }

  public searchByRegion(regionName: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>
      (`${this.urlBase}/${this.byRegionEndPoint}/${regionName}`)
      .pipe(catchError(() => {
        return of([]);
      }));
  }

  public searchByAlphaCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>
      (`${this.urlBase}/${this.byAlphaCode}/${code}`)
      .pipe(
        map(data => (data.length > 0 ? data[0] : null)),
        catchError(() => of(null)),
      );
  }
}

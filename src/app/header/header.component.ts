import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Country, countryList$ } from '../countries';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  countries: Country[] = [];

  constructor(public countryService: CountryService) {
    countryList$
      .pipe(map((countries) => countries.filter((c) => c.name.startsWith('D'))))
      .subscribe((countries) => (this.countries = countries));
  }
}

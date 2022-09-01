import { Component, Input } from '@angular/core';
import { Country } from '../countries';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() index;

  currentCountry: Country;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCurrentCountry().subscribe((c) => {
      console.log(`CARD ${this.index} received ${c.name}`);
      this.currentCountry = c;
    });
  }
}

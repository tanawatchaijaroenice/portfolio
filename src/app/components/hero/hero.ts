import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly lang = inject(LanguageService);

  getExperienceYears(): number {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    return Math.max(0, currentYear - startYear);
  }
}

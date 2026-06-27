import { Component, inject } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-journey',
  imports: [ScrollAnimateDirective],
  templateUrl: './journey.html',
  styleUrl: './journey.scss',
})
export class Journey {
  protected readonly lang = inject(LanguageService);
}

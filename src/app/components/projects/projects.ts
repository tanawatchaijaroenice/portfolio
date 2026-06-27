import { Component, inject } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  imports: [ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly lang = inject(LanguageService);
}

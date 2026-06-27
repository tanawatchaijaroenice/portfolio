import { Component, inject } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly lang = inject(LanguageService);
}

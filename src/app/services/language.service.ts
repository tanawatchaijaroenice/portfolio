import { Injectable, computed, effect, signal } from '@angular/core';
import { CONTACT_INFO, CONTENT, Lang, SiteContent } from '../i18n/content';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  /** Current UI language. */
  readonly lang = signal<Lang>(this.readInitialLang());

  /** All localized content for the current language. */
  readonly t = computed<SiteContent>(() => CONTENT[this.lang()]);

  /** Language-neutral contact facts (with localized name/location helpers). */
  readonly contact = CONTACT_INFO;
  readonly fullName = computed(() => CONTACT_INFO.fullName[this.lang()]);
  readonly locationText = computed(() => CONTACT_INFO.location[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'th' ? 'en' : 'th'));
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  private readInitialLang(): Lang {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'th' || saved === 'en') {
        return saved;
      }
    }
    return 'th';
  }
}

import { Component, inject } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-expertise',
  imports: [ScrollAnimateDirective],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss',
})
export class Expertise {
  protected readonly lang = inject(LanguageService);

  isSvgIcon(skill: string): boolean {
    return ['Claude', 'Gemini', 'Codex'].includes(skill);
  }

  getSvgIconUrl(skill: string): string {
    const map: Record<string, string> = {
      'Claude': 'images/claude-logo.png',
      'Gemini': 'https://cdn.simpleicons.org/googlegemini/8ab4f8',
      'Codex': 'images/codex-logo.png'
    };
    return map[skill] || '';
  }

  getIconClass(skill: string): string {
    const map: Record<string, string> = {
      'Angular': 'devicon-angularjs-plain colored',
      'TypeScript': 'devicon-typescript-plain colored',
      'RxJS': 'devicon-rxjs-plain colored',
      'Signals': 'devicon-angularjs-plain colored',
      'NgRx': 'devicon-ngrx-plain colored',
      'Reactive Forms': 'devicon-angularjs-plain colored',
      'SCSS': 'devicon-sass-original colored',
      'Tailwind CSS': 'devicon-tailwindcss-original colored',
      'React': 'devicon-react-original colored',
      'Next.js': 'devicon-nextjs-plain',
      'App Router': 'devicon-nextjs-plain',
      'Server Components': 'devicon-nextjs-plain',
      'Server Actions': 'devicon-nextjs-plain',
      'REST API (พื้นฐาน)': 'devicon-postman-plain colored',
      'REST API (basic)': 'devicon-postman-plain colored',
      'Node.js (พื้นฐาน)': 'devicon-nodejs-plain colored',
      'Node.js (basic)': 'devicon-nodejs-plain colored',
      'Prisma': 'devicon-prisma-original colored',
      'SQL (พื้นฐาน)': 'devicon-mysql-original colored',
      'SQL (basic)': 'devicon-mysql-original colored',
      'Git': 'devicon-git-plain colored',
      'Git Workflow': 'fa-solid fa-code-branch colored'
    };
    return map[skill] || 'devicon-javascript-plain';
  }
}

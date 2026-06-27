import { Component, inject } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-ai',
  imports: [ScrollAnimateDirective],
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
})
export class Ai {
  protected readonly lang = inject(LanguageService);

  getPointTitle(index: number): string {
    const isTh = this.lang.lang() === 'th';
    const titles = isTh ? [
      'Scaffold รวดเร็ว',
      'Debug คมชัด',
      'ปรึกษา Architecture',
      'ใช้งาน Systematic Agents',
      'สะสม Knowledge Base',
      'วาง Action Plan แม่นยำ'
    ] : [
      'Rapid Scaffolding',
      'Root-Cause Debugging',
      'Architecture Consulting',
      'Systematic AI Agents',
      'Knowledge Base Curation',
      'Structured Action Plans'
    ];
    return titles[index] || 'AI Capability';
  }
}

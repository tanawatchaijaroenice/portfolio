import { ElementRef, Renderer2 } from '@angular/core';
import { ScrollAnimateDirective } from './scroll-animate';

describe('ScrollAnimateDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const renderer = { addClass: () => {}, removeClass: () => {} } as unknown as Renderer2;
    const directive = new ScrollAnimateDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Expertise } from './components/expertise/expertise';
import { Ai } from './components/ai/ai';
import { Journey } from './components/journey/journey';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Expertise, Ai, Journey, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'modern-portfolio';
}

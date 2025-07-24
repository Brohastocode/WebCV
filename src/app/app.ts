import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../header-component/header-component';
import {ContactComponent} from '../contact-component/contact-component';
import {AboutMeComponent} from '../about-me-component/about-me-component';
import {SkillsComponent} from '../skills-component/skills-component';
import {ExperienceComponent} from '../experience-component/experience-component';
import {ProjectsComponent} from '../projects-component/projects-component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ContactComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'My WebCV';
}

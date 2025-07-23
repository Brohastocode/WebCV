import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [
    MenubarModule,
    ImageModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-user',
        command: () => this.scrollToSection('about-me')
      },
      {
        label: 'Skills',
        icon: 'pi pi-fw pi-code',
        command: () => this.scrollToSection('skills')
      },
      {
        label: 'Experience',
        icon: 'pi pi-fw pi-briefcase',
        command: () => this.scrollToSection('experience')
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-folder',
        command: () => this.scrollToSection('projects')
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        command: () => this.scrollToSection('contact')
      },
    ];
    this.loadTheme();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Kis késleltetés segíthet, ha a menü eltűnése animált,
      // és azt akarjuk, hogy előbb tűnjön el, aztán görgessen.
      // Ezt később ki-be kapcsolhatod, ha szükséges.
      // setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // }, 100);
    }
  }
  private loadTheme(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        this.renderer.addClass(document.body, 'dark-mode');
      } else {
        this.isDarkMode = false;
        this.renderer.removeClass(document.body, 'dark-mode');
      }
    }
  }
  toggleTheme(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (this.isDarkMode) {
        this.renderer.addClass(document.body, 'dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        this.renderer.removeClass(document.body, 'dark-mode');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}

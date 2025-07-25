import {Component, OnInit} from '@angular/core';
import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'app-projects-component',
  imports: [
    CarouselModule
  ],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css'
})
export class ProjectsComponent implements OnInit {
  projects: any[];

  responsiveOptions: any[];

  constructor() {
    this.projects = [
      {
        title: 'Karbantartási Jelentő Rendszer (Maintenance Report System)',
        description: 'Egy komplett full-stack webalkalmazás, amely lehetővé teszi operátorok és karbantartó személyzet (lakatos/műszerész) számára a műszaki hibák jelentését és nyomon követését valós időben.',
        technologies: 'Java, Spring Boot (Backend), Angular (Frontend), MySQL, BCrypt.',
        features: [
          'Felhasználói szerepkörök (Operátor, Karbantartó, Admin) és jogosultságok kezelése egyedi felhasználónevekkel és jelszavakkal.',
          'Biztonságos autentikáció implementálása (jelszavak hashelése az adatbázisban).',
          'Készülékhibák jelentése: Operátorok számára felület a meghibásodott készülékek jelölésére és üzenetek hozzáadására.',
          'Hibaelhárítás nyomon követése: Karbantartók számára lehetőség a hibák állapotának (pl. "Folyamatban", "Elhárítva") módosítására.',
          'Rendszergazdai felület a felhasználók és készülékek kezelésére.'
        ],
        githubLink: 'https://github.com/Brohastocode/MaintanceErrorReportingSystem',
        demoLink: null
      },
      {
        title: 'Progmasters Kurzusprojekt: Webalkalmazás Fejlesztés',
        description: 'A Progmasters full-stack képzés záró projektjeként egy komplex webalkalmazás fejlesztésében vettem részt, ahol a front-end fejlesztésre fókuszáltam.',
        technologies: 'Angular, TypeScript, HTML5, CSS3, (Java, Spring Boot).',
        features: [
          'Az egész webalkalmazásra kiterjedő **Dark Mode funkcionalitás** implementálása.',
          'Egy kisebb **chatbot modul** fejlesztése és beépítése a felhasználói felületbe.',
          'Különböző frontend oldali **bugfixek** elvégzése a projekt során.',
          'Reszponzív design elemek kialakítása.'
        ],
        githubLink: 'https://github.com/PROGmasters-Bootcamp-2024-Nov/feedback-app-frontend-intern-team3',
        demoLink: null
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '2000px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }
}

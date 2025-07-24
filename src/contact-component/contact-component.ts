import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent {

  constructor() { }

  sendEmail(): void {
    window.location.href = 'mailto:nagyivan.adrian@gmail.com?subject=Kapcsolatfelvétel%20a%20portfóliódról';
  }

  callPhone(): void {
    window.location.href = 'tel:+36309594815';
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/adrián-nagyiván-3012b01b6/', '_blank');
  }

  openGitHub(): void {
    window.open('https://github.com/Brohastocode', '_blank');
  }
}

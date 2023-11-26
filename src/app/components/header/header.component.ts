import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: any;
  constructor() {
    this.items = [
      {
        label: 'Shop',
        command: () => {
          console.log('Shop');
          // this.router.navigate(["./map"])
        },
      },
      {
        label: 'Mother Of The Bride',
        command: () => {
          console.log('MOTB');
          // this.router.navigate(["./map"])
        },
      },
      {
        label: 'About',
        command: () => {
          console.log('About');
          // this.router.navigate(["./map"])
        },
      },
      {
        label: 'Contact',
        command: () => {
          console.log('Contact');
          // this.router.navigate(["./map"])
        },
      },
    ];
  }

  handleLogoClick() {
    console.log('Home');
  }
}

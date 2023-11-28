import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedItem: any;
  items = [
    {
      label: 'shop',
      command: () => {
        console.log('Shop');
        // this.router.navigate(["./map"])
      },
    },
    {
      label: 'mother of the bride',
      command: () => {
        console.log('MOTB');
        // this.router.navigate(["./map"])
      },
    },
    {
      label: 'about',
      command: () => {
        console.log('About');
        // this.router.navigate(["./map"])
      },
    },
    {
      label: 'contact',
      command: () => {
        console.log('Contact');
        // this.router.navigate(["./map"])
      },
    },
  ];

  selectTab(item: any): void {
    this.selectedItem = item;
    item.command();
  }

  handleLogoClick() {
    console.log('Home');
    this.selectedItem = undefined;
  }
}

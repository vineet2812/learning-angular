import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {
  listOfMenu: string[] = ['Home','Products', 'Sale', 'New Arrivals', 'Contacts']
}

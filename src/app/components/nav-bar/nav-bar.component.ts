import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
navigationUrls = [
  { title: 'Home', route: 'home' },
  { title: 'About', route: 'about' },
  { title: 'Services', route: 'services' },
  { title: 'Contact Us', route: 'contact-us' },
]
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xaka-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(public router: Router) {
  }
}

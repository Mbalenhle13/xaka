import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
navigationUrls = [
  { title: 'Home', route: 'home' },
  { title: 'Services', route: 'services' },
  { title: 'Blog', route: 'blog' },
]
  currentRoute: string | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Listen for navigation events to update the active nav item
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.currentRoute = this.activatedRoute?.root?.firstChild?.snapshot?.routeConfig?.path;
    });
  }
}

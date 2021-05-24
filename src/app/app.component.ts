import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-converter';
  currentRoute = '';
  constructor(private router: Router) {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
  })
  }
}

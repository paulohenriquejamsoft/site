import { Component, Renderer, ViewChild, OnInit , ElementRef, Inject} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { Subscription} from 'rxjs';
import { filter} from 'rxjs/operators';
import { DOCUMENT, Location } from '@angular/common';


import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'motel';
  private _router: Subscription;
    @ViewChild(NavbarComponent, null) navbar: NavbarComponent;

    constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}

    ngOnInit() {
      const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.pipe(
          filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
          } else {
              window.document.activeElement.scrollTop = 0;
          }
          this.navbar.sidebarClose();
      });
      // Nesse momento altera
      this.renderer.listenGlobal('window', 'scroll', (event) => {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
            // add logic
            navbar.classList.remove('navbar-transparent');
        } else {
            // remove logic
            navbar.classList.add('navbar-transparent');
        }
      });
      const ua = window.navigator.userAgent;
      const trident = ua.indexOf('Trident/');
      let version: any;
      if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:');
            version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }
      if (version) {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
      }

    }

}

import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe(event => {

    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    else if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    else if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}

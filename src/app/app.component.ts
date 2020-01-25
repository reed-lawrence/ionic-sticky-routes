import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IAppPage } from './_shared/classes/app-page';
import { Router, NavigationEnd } from '@angular/router';
import { ShoppingCartService } from './shopping-cart/services/shopping-cart.service';
import { ShoppingCart } from './shopping-cart/classes/shopping-cart';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages: IAppPage[] = [
    {
      title: 'Home',
      href_base: '/home',
      icon: 'home'
    },
    {
      title: 'Products',
      href_base: '/products',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private cartService: ShoppingCartService
  ) {
    this.router.events.subscribe(
      (e) => {
        if (e instanceof NavigationEnd) {
          for (const page of this.appPages) {
            if (e.url.indexOf(page.href_base) === 0) {
              page.href_current = e.url;
            }
          }
        }
      }
    );

    this.cartService.onChanges.subscribe(
      (event) => {
        console.log(event);
        this.cart = this.cartService.cart;
      }
    );

    this.initializeApp();
  }

  cart = new ShoppingCart();

  handleNavigation(page: IAppPage) {
    if (page.href_current) {
      if (page.href_current === this.router.url) {
        return this.router.navigateByUrl(page.href_base);
      } else {
        return this.router.navigateByUrl(page.href_current);
      }
    } else {
      return this.router.navigateByUrl(page.href_base);
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

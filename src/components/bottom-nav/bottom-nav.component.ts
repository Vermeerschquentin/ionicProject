import { Component } from '@angular/core';
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { Router, NavigationEnd } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons/icons';
import { home, fish, cart, call } from 'ionicons/icons';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge],
  template: `
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" (click)="navigate('/home')" [class.tab-selected]="currentPath === '/home'">
        <ion-icon name="home"></ion-icon>
        <ion-label>Accueil</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="products" (click)="navigate('/products')" [class.tab-selected]="currentPath.includes('/products')">
        <ion-icon name="fish"></ion-icon>
        <ion-label>Produits</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="cart" (click)="navigate('/cart')" [class.tab-selected]="currentPath === '/cart'">
        <ion-icon name="cart"></ion-icon>
        <ion-label>Panier</ion-label>
        @if ((cartCount$ | async)! > 0) {
          <ion-badge color="danger">{{ cartCount$ | async }}</ion-badge>
        }
      </ion-tab-button>

      <ion-tab-button tab="manager" (click)="navigate('/manager')" [class.tab-selected]="currentPath === '/manager'">
        <ion-icon name="call"></ion-icon>
        <ion-label>Contact</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  `,
  styles: [`
    ion-tab-bar {
      position: fixed;
      bottom: 0;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    }
    .tab-selected {
      color: var(--ion-color-primary);
    }
  `]
})
export class BottomNavComponent {
  currentPath = '';
  cartCount$ = this.cartService.cart$.pipe(
    map(cart => cart.length)
  );

  constructor(
    private router: Router,
    private cartService: CartService
  ) {
    addIcons({ home, fish, cart, call });
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentPath = event.url;
    });
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
// ============================================
// 6. components/header/header.component.ts
// ============================================
import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonBadge } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons/icons';
import { arrowBack, cart } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonBadge],
  template: `
    <ion-header>
      <ion-toolbar color="primary" class="gradient-toolbar">
        <ion-buttons slot="start">
          @if (showBack) {
            <ion-button (click)="goBack()">
              <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
          }
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="goToCart()">
            <ion-icon name="cart"></ion-icon>
            @if ((cartCount$ | async)! > 0) {
              <ion-badge color="danger" class="cart-badge">{{ cartCount$ | async }}</ion-badge>
            }
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `,
  styles: [`
    .gradient-toolbar {
      --background: linear-gradient(to right, var(--ion-color-primary), var(--ion-color-secondary));
    }
    .cart-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 0.75rem;
    }
  `]
})
export class HeaderComponent {
  @Input() title = '';
  @Input() showBack = false;

  cartCount$ = this.cartService.cart$.pipe(
    map(cart => cart.length)
  );

  constructor(
    private router: Router,
    private cartService: CartService
  ) {
    addIcons({ arrowBack, cart });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}

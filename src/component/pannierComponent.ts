import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Item {
  name: string;
  img?: string;
}

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button (click)="togglePanier()">
        <ion-icon name="cart"></ion-icon>
        <ion-badge *ngIf="items.length > 0" color="danger">
          {{ items.length }}
        </ion-badge>
      </ion-fab-button>
    </ion-fab>

    <ion-modal [isOpen]="show" (didDismiss)="show = false">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-title>Panier</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="show = false">
                <ion-icon name="close"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list *ngIf="items.length > 0; else emptyCart">
            <app-item-cell 
              *ngFor="let item of items" 
              [item]="item">
            </app-item-cell>
          </ion-list>

          <ng-template #emptyCart>
            <div class="empty-cart">
              <ion-icon name="cart-outline" size="large"></ion-icon>
              <p>Votre panier est vide</p>
            </div>
          </ng-template>
        </ion-content>
      </ng-template>
    </ion-modal>
  `,
  styles: [`
    .empty-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--ion-color-medium);
    }

    .empty-cart ion-icon {
      font-size: 80px;
      margin-bottom: 16px;
    }
  `]
})
export class PanierComponent {
  @Input() items: Item[] = [];
  show: boolean = false;

  togglePanier() {
    this.show = !this.show;
  }
}

@Component({
  selector: 'app-item-cell',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-item>
      <ion-thumbnail slot="start" *ngIf="item.img">
        <img [src]="item.img" [alt]="item.name" />
      </ion-thumbnail>
      <ion-label>{{ item.name }}</ion-label>
    </ion-item>
  `
})
export class ItemCellComponent {
  @Input() item!: Item;
}
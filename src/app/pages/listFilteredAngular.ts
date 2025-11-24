import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Item {
  name: string;
  adress: string;
  desc?: string;
  img?: string;
}

@Component({
  selector: 'app-list-filtered',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  template: `
    <ion-content>
      <ion-searchbar
        [(ngModel)]="filterTxt"
        placeholder="Rechercher"
        [debounce]="300">
      </ion-searchbar>

      <ion-list>
        <app-item 
          *ngFor="let item of getFilteredItems()" 
          [item]="item">
        </app-item>
      </ion-list>
    </ion-content>
  `
})
export class ListFilteredComponent {
  filterTxt: string = '';
  itemList: Item[] = [];

  getFilteredItems(): Item[] {
    if (!this.filterTxt.trim()) {
      return this.itemList;
    }

    const words = this.filterTxt.split(' ');
    
    return this.itemList.filter(item => {
      return words.some(word => {
        const lowerWord = word.toLowerCase();
        return item.adress.toLowerCase().includes(lowerWord) ||
               item.name.toLowerCase().includes(lowerWord);
      });
    });
  }
}

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-item>
      <ion-label>
        <h2>{{ item.name }}</h2>
        <p>{{ item.adress }}</p>
        <p *ngIf="item.desc">{{ item.desc }}</p>
      </ion-label>
      <ion-thumbnail slot="end" *ngIf="item.img">
        <img [src]="item.img" [alt]="item.name" />
      </ion-thumbnail>
    </ion-item>
  `
})
export class ItemComponent {
  @Input() item!: Item;
}
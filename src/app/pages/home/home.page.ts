// ============================================
// 1. pages/home/home.page.ts
// ============================================
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonIcon 
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { addIcons } from 'ionicons/icons';
import { boat, restaurant, book, cart, call } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonIcon,
    HeaderComponent,
    BottomNavComponent
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  menuItems = [
    { icon: 'boat', title: 'Nos Bateaux', desc: 'Découvrez nos pêcheurs', gradient: 'teal-cyan', route: '/boats' },
    { icon: 'restaurant', title: 'Restaurants Partenaires', desc: 'Points de livraison', gradient: 'emerald-teal', route: '/restaurants' },
    { icon: 'book', title: 'Idées de Recettes', desc: 'Inspirez-vous', gradient: 'orange', route: '/recipes' },
    { icon: 'cart', title: 'Commander Maintenant', desc: 'Produits frais disponibles', gradient: 'red-pink', route: '/products', highlight: true },
    { icon: 'call', title: 'Le Gérant', desc: 'Contactez-nous', gradient: 'blue-indigo', route: '/manager' }
  ];

  constructor(private router: Router) {
    addIcons({ boat, restaurant, book, cart, call });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Restaurant,Produit, CartItem } from '../models/interfaces';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  private selectedRestaurantSubject = new BehaviorSubject<Restaurant | null>(null);
  public selectedRestaurant$ = this.selectedRestaurantSubject.asObservable();

  getCart(): CartItem[] {
    return this.cartSubject.value;
  }

  addToCart(product: Produit): void {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.find((item: { id: number; }) => item.id === product.id);

    if (existingItem) {
      existingItem.quantite++;
      this.cartSubject.next([...currentCart]);
    } else {
      this.cartSubject.next([...currentCart, { ...product, quantite: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cartSubject.value.filter((item: { id: number; }) => item.id !== productId);
    this.cartSubject.next(currentCart);
  }

  toggleProductInCart(product: Produit): void {
    const currentCart = this.cartSubject.value;
    const index = currentCart.findIndex((item: { id: number; }) => item.id === product.id);

    if (index >= 0) {
      currentCart.splice(index, 1);
    } else {
      currentCart.push({ ...product, quantite: 1 });
    }
    this.cartSubject.next([...currentCart]);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentCart = this.cartSubject.value;
    const item = currentCart.find((i: { id: number; }) => i.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantite = quantity;
        this.cartSubject.next([...currentCart]);
      }
    }
  }

  isInCart(productId: number): boolean {
    return this.cartSubject.value.some((item: { id: number; }) => item.id === productId);
  }

  getTotal(): number {
    return this.cartSubject.value.reduce((sum: number, item: { promotion: any; prixPromo: any; prix: any; quantite: number; }) => {
      const price = item.promotion && item.prixPromo ? item.prixPromo : item.prix;
      return sum + (price * item.quantite);
    }, 0);
  }

  getCartCount(): number {
    return this.cartSubject.value.length;
  }

  setSelectedRestaurant(restaurant: Restaurant | null): void {
    this.selectedRestaurantSubject.next(restaurant);
  }

  getSelectedRestaurant(): Restaurant | null {
    return this.selectedRestaurantSubject.value;
  }

  clearCart(): void {
    this.cartSubject.next([]);
    this.selectedRestaurantSubject.next(null);
  }

  calculateDeliveryDate(restaurant: Restaurant): string | null {
    if (!restaurant) return null;

    const today = new Date();
    const daysOfWeek = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const availableDays = restaurant.jour.split(',');

    for (let i = 1; i <= 7; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() + i);
      const dayName = daysOfWeek[checkDate.getDay()];

      if (availableDays.includes(dayName)) {
        return checkDate.toLocaleDateString('fr-FR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long'
        });
      }
    }
    return null;
  }
}


import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'boats',
    loadComponent: () => import('./pages/boats/boats.page').then(m => m.BoatsPage)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./pages/restaurants/restaurants.page').then(m => m.RestaurantsPage)
  },
  {
    path: 'recipes',
    loadComponent: () => import('./pages/recipes/recipes.page').then(m => m.RecipesPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then(m => m.ProductsPage)
  },
  {
    path: 'products/:category',
    loadComponent: () => import('./pages/product-list/product-list.page').then(m => m.ProductListPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then(m => m.CartPage)
  },
  {
    path: 'manager',
    loadComponent: () => import('./pages/manager/manager.page').then(m => m.ManagerPage)
  }
];


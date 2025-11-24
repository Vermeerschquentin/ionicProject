
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bateau,Restaurant,Recette,ProduitsData,Gerant,Produit } from '../models/interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly bateaux: Bateau[] = [
    { id: 1, nom: "Le Thibault", capitaine: "Thibault Martin", specialite: "Poissons de ligne", icon: "🚢" },
    { id: 2, nom: "L'Écume", capitaine: "Jean Dupont", specialite: "Coquillages", icon: "⛵" },
    { id: 3, nom: "La Normandie", capitaine: "Pierre Lefebvre", specialite: "Crustacés", icon: "🛥️" }
  ];

  private readonly restaurants: Restaurant[] = [
    { id: 1, nom: "Le Marin Bleu", adresse: "15 Rue de la Mer, 75001 Paris", horaires: "Mer. & Sam. 18h-20h", jour: "mercredi,samedi", icon: "🍴" },
    { id: 2, nom: "La Coquille d'Or", adresse: "28 Avenue des Champs, 75008 Paris", horaires: "Dim. 10h-14h", jour: "dimanche", icon: "🥘" },
    { id: 3, nom: "Chez Neptune", adresse: "42 Bd Saint-Michel, 75006 Paris", horaires: "Mer., Sam. & Dim. 12h-20h", jour: "mercredi,samedi,dimanche", icon: "🍽️" }
  ];

  private readonly recettes: Recette[] = [
    { id: 1, nom: "Sole Meunière", difficulte: "Facile", temps: "20 min", icon: "👨‍🍳" },
    { id: 2, nom: "Moules Marinières", difficulte: "Facile", temps: "15 min", icon: "🍲" },
    { id: 3, nom: "Plateau de Fruits de Mer", difficulte: "Moyen", temps: "30 min", icon: "🦞" },
    { id: 4, nom: "Bouillabaisse", difficulte: "Difficile", temps: "60 min", icon: "🍜" }
  ];

  private readonly produits: ProduitsData = {
    poissons: [
      { id: 101, nom: "Sole", prix: 28.50, description: "Sole fraîche de Normandie", promotion: false },
      { id: 102, nom: "Bar de ligne", prix: 32.00, description: "Bar pêché à la ligne", promotion: false },
      { id: 103, nom: "Dorade royale", prix: 24.90, description: "Dorade royale sauvage", promotion: false },
      { id: 104, nom: "Turbot", prix: 45.00, description: "Le roi des poissons", promotion: false },
      { id: 105, nom: "Rouget barbet", prix: 18.50, prixPromo: 15.00, description: "Rouget de roche", promotion: true }
    ],
    coquillages: [
      { id: 201, nom: "Huîtres Spéciales", prix: 9.50, description: "Huîtres n°3 (douzaine)", promotion: false },
      { id: 202, nom: "Moules de bouchot", prix: 3.90, description: "Moules AOP (kg)", promotion: false },
      { id: 203, nom: "Palourdes", prix: 15.00, description: "Palourdes grises (kg)", promotion: false },
      { id: 204, nom: "Coques", prix: 6.50, prixPromo: 4.90, description: "Coques fraîches (kg)", promotion: true },
      { id: 205, nom: "Bulots cuits", prix: 12.00, description: "Bulots au court-bouillon (kg)", promotion: false }
    ],
    crustaces: [
      { id: 301, nom: "Homard vivant", prix: 38.00, description: "Homard bleu 500-600g (kg)", promotion: false },
      { id: 302, nom: "Tourteau", prix: 16.50, description: "Tourteau bien plein (kg)", promotion: false },
      { id: 303, nom: "Crevettes roses", prix: 22.00, description: "Crevettes cuites (kg)", promotion: false },
      { id: 304, nom: "Langoustines", prix: 28.00, prixPromo: 24.00, description: "Langoustines XL (kg)", promotion: true },
      { id: 305, nom: "Araignée de mer", prix: 14.00, description: "Araignée femelle (kg)", promotion: false }
    ]
  };

  private readonly gerant: Gerant = {
    nom: "Thibault Martin",
    telephone: "06.65.99.90.78",
    email: "lebateaudethibault@gmail.com",
    description: "Pêcheur artisan depuis plus de 20 ans, passionné par la mer et les produits de qualité."
  };

  getBateaux(): Bateau[] {
    return this.bateaux;
  }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  getRecettes(): Recette[] {
    return this.recettes;
  }

  getProduits(): ProduitsData {
    return this.produits;
  }

  getProduitsParCategorie(category: string): Produit[] {
    return this.produits[category as keyof ProduitsData] || [];
  }

  getProduitsEnPromotion(): Produit[] {
    const allProducts: Produit[] = [];
    Object.values(this.produits).forEach(category => {
      allProducts.push(...category.filter((p: { promotion: any; }) => p.promotion));
    });
    return allProducts;
  }

  getGerant(): Gerant {
    return this.gerant;
  }

  getProductById(id: number): Produit | undefined {
    for (const category of Object.values(this.produits)) {
      const product = category.find((p: { id: number; }) => p.id === id);
      if (product) return product;
    }
    return undefined;
  }
}


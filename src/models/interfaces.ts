export interface Bateau {
  id: number;
  nom: string;
  capitaine: string;
  specialite: string;
  icon: string;
}

export interface Restaurant {
  id: number;
  nom: string;
  adresse: string;
  horaires: string;
  jour: string;
  icon: string;
}

export interface Recette {
  id: number;
  nom: string;
  difficulte: string;
  temps: string;
  icon: string;
}

export interface Produit {
  id: number;
  nom: string;
  prix: number;
  prixPromo?: number;
  description: string;
  promotion: boolean;
}

export interface CartItem extends Produit {
  quantite: number;
}

export interface Gerant {
  nom: string;
  telephone: string;
  email: string;
  description: string;
}

export interface ProduitsData {
  poissons: Produit[];
  coquillages: Produit[];
  crustaces: Produit[];
}
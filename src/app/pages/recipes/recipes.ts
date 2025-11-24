
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { DataService } from '../../../services/data.service';
import { Recette } from '../../../models/interfaces';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardContent,
    HeaderComponent,
    BottomNavComponent
  ],
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit {
  recettes: Recette[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.recettes = this.dataService.getRecettes();
  }
}
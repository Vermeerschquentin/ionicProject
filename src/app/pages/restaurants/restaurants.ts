
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../../components/header/header.component';
import { BottomNavComponent } from '../../../components/bottom-nav/bottom-nav.component';
import { DataService } from '../../../services/data.service';
import { Restaurant } from '../../../models/interfaces';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardContent,
    HeaderComponent,
    BottomNavComponent
  ],
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss']
})
export class RestaurantsPage implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.restaurants = this.dataService.getRestaurants();
  }
}

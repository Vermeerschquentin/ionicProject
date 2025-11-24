import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { DataService } from '../../services/data.service';
import { Bateau } from '../../models/interfaces';

@Component({
  selector: 'app-boats',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardContent,
    HeaderComponent,
    BottomNavComponent
  ],
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss']
})
export class BoatsPage implements OnInit {
  bateaux: Bateau[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.bateaux = this.dataService.getBateaux();
  }
}
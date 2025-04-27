import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CardComponent, CommonModule]
})
export class AppComponent {
  posts=[
    {
      title:'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      username:'nature',
      description:'I saw this neat tree today'
    },
    {
      title:'Mountains',
      imageUrl:'assets/mountain.jpeg',
      username:'nature',
      description:'I saw this neat tree today'
    },
    {
      title:'Biking',
      imageUrl:'assets/biking.jpeg',
      username:'nature',
      description:'I saw this neat tree today'
    }
  ]
}

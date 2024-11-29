import { Component } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css'] // Fixed typo: 'styleUrl' -> 'styleUrls'
})
export class BusinessCardComponent {
  // Data for the rotating card
  cardData = {
    nom: 'HASNAOUI',
    prenom: 'EMNA',
    job: 'Student',
    citation: "The best way to predict the future is to create it.",
    description: '', // Nouveau champ : description
    keywords: '', // Nouveau champ : mots-clés
    image: 'assets/rotating_card_profile2.png',
    coverImage: 'assets/rotating_card_thumb2.png',
    stats: {
      followers: 235,
      following: 114,
      projects: 35
    },
    socialLinks: {
      facebook: 'https://creative-tim.com',
      google: 'https://creative-tim.com',
      twitter: 'https://creative-tim.com'
    }
  };
}

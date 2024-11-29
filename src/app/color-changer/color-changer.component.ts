import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrl: './color-changer.component.css'
})
export class ColorChangerComponent {
  divColor: string = 'white'; // Couleur par défaut du div

  changeColor(newColor: string): void {
    this.divColor = newColor; // Met à jour la couleur du div
  }

  resetColor(): void {
    this.divColor = 'white'; // Réinitialise à la couleur par défaut
  }

}

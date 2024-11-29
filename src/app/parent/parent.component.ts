import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
// Couleur initiale de fond
parentBackgroundColor: string = 'lightblue';

// Méthode pour mettre à jour la couleur depuis le fils
updateBackgroundColor(newColor: string) {
  this.parentBackgroundColor = newColor;
}
}

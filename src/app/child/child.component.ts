import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() backgroundColor: string = '';  // Couleur reçue du parent
  @Output() changeBackgroundColor = new EventEmitter<string>(); // Événement pour envoyer une nouvelle couleur

  // Couleur favorite du fils
  myFavoriteColor: string = 'coral';

  // Méthode pour notifier le parent
  sendFavoriteColor() {
    this.changeBackgroundColor.emit(this.myFavoriteColor);
  }
}

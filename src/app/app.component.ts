import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data } from './P2/data P2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Definición de los usuarios como objeto
  users = data;

  // Notificaciones de los usuarios, usando BehaviorSubject
  notifications$: { [key: string]: BehaviorSubject<any[]> } = {};

  constructor() {
    // Crear un BehaviorSubject para cada usuario
    Object.keys(this.users).forEach(user_id => {
      // Inicializar el BehaviorSubject con un tipo explícito
      this.notifications$[user_id] = new BehaviorSubject<any[]>([]);
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: '../perfil/perfil.html',
  styleUrls: ['../perfil/perfil.css']
})
export class PerfilComponent {
  perfil = {
    nombre: '',
    apellidos: '',
    email: '',
    edad: null as number | null
  };

  resetear() {
    this.perfil = { nombre: '', apellidos: '', email: '', edad: null };
  }
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from "./perfil/perfil";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PerfilComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formulario-perfil');
}

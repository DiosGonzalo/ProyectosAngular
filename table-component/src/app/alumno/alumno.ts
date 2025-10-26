import { Component } from '@angular/core';

export type Alumno = {
  nombre: string;
  apellidos: string;
  edad: number;
  curso: string;
  sexo: 'male' | 'female';
};

@Component({
  selector: 'app-alumnos',
  templateUrl: '../alumno/alumno.html',
  styleUrls: ['../alumno/alumno.css']
})
export class AlumnosComponent {
  alumnos: Alumno[] = [
    { nombre: 'Ana', apellidos: 'García', edad: 20, curso: '1º DAM', sexo: 'female' },
    { nombre: 'Pablo', apellidos: 'López', edad: 17, curso: '2º ASIR', sexo: 'male' },
    { nombre: 'María', apellidos: 'Santos', edad: 22, curso: '1º DAW', sexo: 'female' },
    { nombre: 'Luis', apellidos: 'Martín', edad: 19, curso: '2º DAM', sexo: 'male' }
  ];

  editar(i: number) {
    console.log('Editar', i, this.alumnos[i]);
  }

  eliminar(i: number) {
    console.log('Eliminar', i, this.alumnos[i]);
    
  }

  iniciales(a: Alumno) {
    const n = (a.nombre || '').trim().split(' ')[0] || '';
    const ap = (a.apellidos || '').trim().split(' ')[0] || '';
    return (n.charAt(0) + (ap.charAt(0) || '')).toUpperCase();
  }
}
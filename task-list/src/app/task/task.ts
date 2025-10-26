import { Component } from '@angular/core';

type Task = {
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-task-list',
  templateUrl: '../task/task.html',
  styleUrls: ['../task/task.css']
})
export class TaskListComponent {
  tasks: Task[] = [
    { title: 'Hacer la compra', done: false },
    { title: 'Estudiar Angular', done: true },
    { title: 'Pasear al perro', done: false }
  ];

  // Alterna el estado done de la tarea
  toggleDone(task: Task): void {
    task.done = !task.done;
  }
}
import { Component } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    todos : Todo[] = [];

    ngOnInit(){
      this.getAllTodo(this.todos);
    }

    getAllTodo(todo : Todo[]){
      this.todos = todo;  
      console.log(todo);
    }
}

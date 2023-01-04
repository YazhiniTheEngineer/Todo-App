import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  outputs : [ `childEvent`]
})
export class TaskFormComponent {
    //task : Todo;

    constructor(private todoService : TodoService){}

    presentDate: any;

    todo = {
      name:  "",
      description:"",
      date : new Date(),
      level : ""
    }

    names:string[] = [];
    todos : Todo[] = [];

    submitted = false;

    ngOnInit(){
      this.todo.name =  "",
      this.todo.description="",
      this.todo.date = new Date();
      this.todo.level = ""
      this.todos = [];
  
     const datePipe = new DatePipe('en-Us');
     this.presentDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
     this.getAllTodos();
    }
    
    onSubmit(form:NgForm){
      this.submitted = true;
      this.todo.name = form.value.name;
      this.todo.description = form.value.task_description;
      this.todo.date = form.value.target_date;
      this.todo.level = form.value.levels;
      let newTodo = new Todo(this.todo.name,this.todo.description,this.todo.date,this.todo.level);
      this.addNewTodo(newTodo);

      form.reset();
      this.ngOnInit();
    }
    

    addNewTodo(todo : Todo){
      this.todoService.onPostData(todo).subscribe(res => {
        this.getAllTodos();
      },err =>{
        alert(err);
      });
    }

    getAllTodos(){
      this.todoService.getAllTodos().subscribe(res => {
        this.todos = res;
      },err =>{
        alert(err);
      });
    }


}

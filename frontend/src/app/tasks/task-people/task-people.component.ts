import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-task-people',
  templateUrl: './task-people.component.html',
  styleUrls: ['./task-people.component.css']
})

export class TaskPeopleComponent {

  display = "none";
  display1 = "none";
  display2 = "none";
  

  names : string[] = [];
  tasks : Todo[] = [];
  pendingTasks : Todo[] = [];
  completedTask : Todo[] = [];

  presentDate: any;

  constructor(private todoService : TodoService){}
 
  ngOnInit(){
    this.getDistinctNames();
    const datePipe = new DatePipe('en-Us');
    this.presentDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
  
  

  getDistinctNames(){
    this.todoService.getDistinctNames().subscribe(res => {
      this.names = res;
      this.ngOnInit();
      return this.names;
    },err =>{
      alert(err);
    })
  }

  getAllTasksByName(name : string){
    this.todoService.getAllTasksByName(name).subscribe(res =>{
      this.tasks = res;
      console.log(this.tasks);
    },err =>{
      alert(err);
    })
  }

  openAllTasksModal(name : string) {
    this.display = "block";
    this.getAllTasksByName(name);
  }

  openPendingModal(name : string){
    this.display1 = "block";
    this.getPendingTask(name);
  }

  getPendingTask(name: string) {
    this.todoService.getPendingTask(name).subscribe(res =>{
      this.pendingTasks = res;
      console.log(this.tasks);

    },err =>{
      alert(err);
    })
  }

  openCompletedModal(name : string){
    this.display2 = "block";
    this.getCompletedTask(name);
  }
  getCompletedTask(name: string) {
    this.todoService.getCompletedTask(name).subscribe(res =>{
      this.completedTask = res;
      console.log(this.tasks);
    },err =>{
      alert(err);
    })
  }

  markCompleteTodo(todo : Todo){
    this.todoService.editTodo(todo).subscribe(res =>{
      this.getPendingTask(todo.name);
      console.log(res);
    },err =>{
      console.log(err);
    })
  }

  deleteById(task : Todo){
    this.todoService.deleteTodoById(task.id).subscribe(res => {
      this.getPendingTask(task.name)
      this.getCompletedTask(task.name);
    },err => {
      alert(err);
    })
  }

  


  onCloseHandled() {
    this.display = "none";
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  onCloseHandled2() {
    this.display2 = "none";
  }


}

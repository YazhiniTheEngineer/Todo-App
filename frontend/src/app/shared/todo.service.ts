import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  serviceurl : string;

  constructor(private http : HttpClient) { 
    this.serviceurl = "http://localhost:8080/todo";
  }

  onPostData(todo : Todo) : Observable<Todo>{
    return this.http.post<Todo>(this.serviceurl,todo);
  }

  getAllTodos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.serviceurl);
  }

  getDistinctNames() : Observable<string[]> {
    return this.http.get<string[]>(this.serviceurl+'/name');
  }

  getAllTasksByName(name : string) : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.serviceurl+'/'+name);
  }

  getPendingTask(name : string) : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.serviceurl+'/pending/'+name);
  }

  getCompletedTask(name : string) : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.serviceurl+'/completed/'+name);
  }

  editTodo(todo : Todo) : Observable<Todo>{
    return this.http.put<Todo>(this.serviceurl,todo);
  }

  deleteTodoById( id : number) : Observable<Todo>{
    return this.http.delete<Todo>(this.serviceurl+'/'+id);
  }

  updateTodo(todo : Todo) : Observable<Todo>{
    return this.http.put<Todo>(this.serviceurl+'/update',todo);
  }

}

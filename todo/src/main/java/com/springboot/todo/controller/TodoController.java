package com.springboot.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.todo.entity.Todo;
import com.springboot.todo.service.TodoService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@PostMapping("/todo")
	public Todo saveTodo(@RequestBody Todo todo) {
		return todoService.saveTodo(todo);
	}
	
	@GetMapping("/todo")
	public List<Todo> getAllTodos(){
		return todoService.getAllTodos();
	}
	
	@GetMapping("/todo/name")
	public List<String> getDistinctNames(){
		return todoService.getDistinctNames();
	}
	
	@GetMapping("/todo/{name}")
	public List<Todo> getAllTodoByName(@PathVariable("name") String name){
		return todoService.getAllTodoByName(name);
	}
	
	@GetMapping("/todo/completed/{name}")
		public List<Todo> getAllCompletedByName(@PathVariable("name") String name){
			return todoService.getAllCompletedByName(name);
	}
	
		
	@GetMapping("/todo/pending/{name}")
		public List<Todo> getAllPendingByName(@PathVariable("name") String name){
			return todoService.getAllPendingByName(name);
	}
	
		
	@PutMapping("/todo")
	public Todo updateTodo(@RequestBody Todo todo) {
		return todoService.markComplete(todo);
	}
	
	@PutMapping("/todo/update")
	public Todo updateEntireTodo(@RequestBody Todo todo) {
		return todoService.updateTodo(todo);
	}
	
	
	
	@DeleteMapping("/todo/{id}")
	public void deleteTodo(@PathVariable("id") Long id) {
		todoService.deleteTodo(id);
	}
	
	
	
	//getUniqueNames
	//getTaskBasedOnNames
	//getCompletedTaskBasedOnNames
	//getPendingTaskBasedOnNames
	

}

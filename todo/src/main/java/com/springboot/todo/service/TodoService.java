package com.springboot.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.todo.entity.Todo;
import com.springboot.todo.repository.TodoRepository;

@Service
public class TodoService {
	
	@Autowired
	private TodoRepository todoRepository;

	public Todo saveTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	public List<Todo> getAllTodos() {
		return todoRepository.findAll();
	}

	public Todo markComplete(Todo todo) {
			if(todo.isCompleted() == false) {
				todo.setCompleted(true);
				return todoRepository.save(todo);
			}else {
				todo.setCompleted(false);
				return todoRepository.save(todo);
			}
	}

	public void deleteTodo(Long id) {
		todoRepository.deleteById(id);
	}

	public List<String> getDistinctNames() {
		return todoRepository.getDistinctNames();
	}

	public List<Todo> getAllTodoByName(String name) {
		return todoRepository.getAllTodoByName(name);
	}

	public List<Todo> getAllCompletedByName(String name) {
		return todoRepository.getAllCompletedByName(name);
	}

	public List<Todo> getAllPendingByName(String name) {
		return todoRepository.getAllPendingByName(name);
	}

	public Todo updateTodo(Todo todo) {
		return todoRepository.save(todo);
	}

}

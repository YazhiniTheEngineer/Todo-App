package com.springboot.todo.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;


@Entity
@Table(name="todos")
public class Todo {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@NonNull
	private String name;
	
	@NonNull
	private String description;
	
	private Date date;
	
	private String levelsOfTodo; 
	
	private boolean isCompleted;
	
	public Todo() {}
	
	public Todo(Long id, String name, String description, Date date, String levelsOfTodo) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.date = date;
		this.levelsOfTodo = levelsOfTodo;
		this.isCompleted = false;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getLevelsOfTodo() {
		return levelsOfTodo;
	}

	public void setLevelsOfTodo(String levelsOfTodo) {
		this.levelsOfTodo = levelsOfTodo;
	}

	public boolean isCompleted() {
		return isCompleted;
	}
	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
	
	
	
	
}

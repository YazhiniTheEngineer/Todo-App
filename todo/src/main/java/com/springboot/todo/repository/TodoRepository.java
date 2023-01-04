package com.springboot.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.todo.entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

	@Query(value = "select distinct name from todos", nativeQuery=true)
	List<String> getDistinctNames();

	@Query(value = "select * from todos where name= ?1", nativeQuery=true)
	List<Todo> getAllTodoByName(String name);

	@Query(value="select * from todos where name=?1 and is_completed=true", nativeQuery=true)
	List<Todo> getAllCompletedByName(String name);
	
	@Query(value="select * from todos where name=?1 and is_completed=false", nativeQuery=true)
	List<Todo> getAllPendingByName(String name);
	
	
	
}

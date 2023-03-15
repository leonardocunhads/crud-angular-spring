package com.leonardo;

import com.leonardo.repository.CourseRepository;
import com.leonardo.model.Course;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return (args) -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular com Spring Boot");
			c.setCategory("frontend");
			courseRepository.save(c);
		};
	}

}
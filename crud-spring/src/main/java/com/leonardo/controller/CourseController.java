package com.leonardo.controller;

import java.util.List;
import com.leonardo.model.Course;
import com.leonardo.repository.CourseRepository;

import lombok.AllArgsConstructor;

import org.hibernate.annotations.SourceType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController // Sinaliza que esta classe contém um Endpoint, url para acessar a API
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public @ResponseBody List<Course> list() {
        return courseRepository.findAll();
    }

    // @RequestMapping(method = RequestMethod.POST)
    @PostMapping
    // @RequestBody para informar ao spring que é o corpo do request
    // O spring vai receber o objeto json enviado na request e tentar 
    // mapear com o model que criamos para Course
    // ResponseEntity: Utilizado para retornar um código HTTP
    @ResponseStatus(code = HttpStatus.CREATED) 
    public Course createCourse(@RequestBody Course course) {
        // System.out.println(course);
        // testado, está recebendo o request do angular
        // abaixo: salvar o curso no banco
        return courseRepository.save(course);
        // return ResponseEntity.status(HttpStatus.CREATED)
        // .body(courseRepository.save(course));
    }
}

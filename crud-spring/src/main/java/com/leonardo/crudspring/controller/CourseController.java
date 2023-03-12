package com.leonardo.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import model.Course;
import repository.CourseRepository;

@RestController 
@RequestMapping("/api/courses")
// é um java servelet
//diz ao spring que esta classe contem um endpoint
//contem uma URL para acessar nossa API
@AllArgsConstructor
public class CourseController {
    
    private final CourseRepository courseRepository;

    // public CourseController(CourseRepository courseRepository) {
    //     this.courseRepository = courseRepository;
    // }

    @GetMapping // ou pode usar o @RequestMapping(method = RequestMethod.GET)
    public List<Course> list(){
        return courseRepository.findAll();
    }
}

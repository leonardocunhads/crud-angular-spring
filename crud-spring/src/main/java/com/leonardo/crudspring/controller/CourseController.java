package com.leonardo.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Course;

@RestController 
@RequestMapping("/api/courses")
// é um java servelet
//diz ao spring que esta classe contem um endpoint
//contem uma URL para acessar nossa API
public class CourseController {
    
    @GetMapping // ou pode usar o @RequestMapping(method = RequestMethod.GET)
    public List<Course> list(){
        return null;
    }
}

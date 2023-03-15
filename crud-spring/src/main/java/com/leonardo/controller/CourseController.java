package com.leonardo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Sinaliza que esta classe contém um Endpoint, url para acessar a API
@RequestMapping("/api/courses")
public class CourseController {

    @GetMapping
    public List<Object> list() {
        return null;
    }
}

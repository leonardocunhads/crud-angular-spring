package com.leonardo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity // Classificando esta classe como uma entidade,
        // para o mapeamento no banco de
        // dados
        // @Table(name = "cursos") pode ser utilizado
        // caso o banco de dados já tenha um
        // nome especificado, caso não utilize o nome será o da classe
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 15, nullable = false)
    private String category;

}

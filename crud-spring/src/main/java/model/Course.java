package model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data //ou usar @Getter e @Setter
@Entity // especificando esta classe como uma entidade para mapear
// para o banco de dados.
// Caso a entidade não possua o mesmo nome da tabela
// no banco de dados pode usar o @Table(name = "cursos")
public class Course {
    // Quanto mais informações com as anotações (@) mais fácil para gerar o SQL no banco de dados
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // para que seja gerado um ID automaticamente quando for inserido 
    // um novo item na tabela
    private Long id;

    @Column(length = 200, nullable = false) //@Column(name = "nome") caso seja um nome diferente no banco
    private String name;
    
    @Column(length = 12, nullable = false)
    private String category;

}

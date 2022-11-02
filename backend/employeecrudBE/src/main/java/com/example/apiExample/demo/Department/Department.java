package com.example.apiExample.demo.Department;

import com.example.apiExample.demo.Employee.Employee;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table
public class Department {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   @Getter(AccessLevel.PACKAGE) private Long id;
   @Getter(AccessLevel.PACKAGE) @Setter(AccessLevel.PACKAGE) private String name;
   @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
   @Getter(AccessLevel.PACKAGE) @Setter(AccessLevel.PACKAGE) private List <Employee> employees = new ArrayList<>();



//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//   private Long id;
//   private String name;
//    @OneToMany(mappedBy = "department")
//    private List <Employee> employees = new ArrayList<>();



    public Department(String name, List<Employee> employees) {
        this.name = name;
        this.employees = employees;
    }

    public Department(){

    }

    public Long getId(){

    return id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }
}

package com.example.apiExample.demo.Employee;

import com.example.apiExample.demo.Department.Department;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;


import com.fasterxml.jackson.databind.ObjectMapper;


@Entity
@Data
@Table(name = "Employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter private Long id;
    @Getter @Setter private String name;
    @Getter @Setter private String email;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    @Getter(AccessLevel.PACKAGE) @Setter(AccessLevel.PACKAGE) private Department department;




    public Employee(String name, String email, Department department) {
        this.name = name;
        this.email = email;
        this.department = department;

    }

    public Employee(){


    }


    public String getDepartmentName(){

        return department.getName();

    }

    public Long getDepartmentId(){
        return department.getId();
    }





}

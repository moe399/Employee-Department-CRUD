package com.example.apiExample.demo.Department;

import com.example.apiExample.demo.Employee.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface DepartmentRepository extends JpaRepository <Department, Long> {




    Department findDepartmentByEmployees_Id(Long id);






}



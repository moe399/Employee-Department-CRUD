package com.example.apiExample.demo.Employee;

import com.example.apiExample.demo.Department.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface EmployeeRepository extends JpaRepository <Employee, Long> {

        List<Employee> findEmployeeByDepartment_Id(Long id);

        Employee findEmployeeByDepartment_IdAndName(Long id, String name);

        Employee findEmployeeByName(String name);

        @Query(value = "select * FROM employee", nativeQuery = true)
       List <Employee> getAllOfEmployees();



//        List<Employee> findEmployeeByDepartment(Department department);



}

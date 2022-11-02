package com.example.apiExample.demo.Employee;

import com.example.apiExample.demo.Department.Department;
import com.example.apiExample.demo.Department.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {


    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository, DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;


    //Employee get all in db - GET

    //Employees get all in department -GET

    //Employees get one by ID in department (can pass in name, then use repository to find Id and use that) - GET


    //Employees get one by ID in department (can pass in name, then use repository to find Id and use that) - GET

    //Employees add one (pass in params) POST

    //Employees edit one by ID (can pass in name, then use repository to find Id and use that) - PUT

    //Employee delete one by ID (can pass in name, then use repository to find Id and use that) - DELETE



    //Employee get all in db - GET
    public List <Employee> getAllEmployees(){

//        return employeeRepository.findAll();
        return employeeRepository.getAllOfEmployees();
    }

    //Employees get all in department -GET
    public List<Employee> getAllEmployeesInDepartment(Long dept_id){
        return employeeRepository.findEmployeeByDepartment_Id(dept_id);
    }


    public Employee getOneEmployeeByDepartment(Long departmentId, String name){
      return   employeeRepository.findEmployeeByDepartment_IdAndName(departmentId, name);
    }

    public Employee getEmployeeFromIdAllDepartments(Long id){

        Employee employee = employeeRepository.findById(id).orElseThrow();

        return employeeRepository.findEmployeeByName(employee.getName());

    }



    public void addEmployee(Long dept_id, String name, String email){
        Department department = departmentRepository.findById(dept_id).orElseThrow();
        Employee employee = new Employee();
        employee.setDepartment(department);
        employee.setName(name);
        employee.setEmail(email);
        employeeRepository.save(employee);
        System.out.println(employee.getDepartment().getName());
    }

    public void editEmployee(Long id, String newName, String newEmail, Long newDepartmentId){

        Employee employee = employeeRepository.findById(id).orElseThrow();
        employee.setName(newName);
        employee.setEmail(newEmail);
        Department newDepartment = departmentRepository.findById(newDepartmentId).orElseThrow();
        employee.setDepartment(newDepartment);
        employeeRepository.save(employee);

    }

    public void deleteEmployee(Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow();
        employeeRepository.delete(employee);
    }



}

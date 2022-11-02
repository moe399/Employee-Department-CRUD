package com.example.apiExample.demo.Employee;


import com.example.apiExample.demo.Department.Department;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController

public class EmployeeController {

   private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }



    //Employee get all in db - GET

    //Employees get all in department -GET

    //Employees get one by ID in department (can pass in name, then use repository to find Id and use that) - GET


    //Employees get one by ID (can pass in name, then use repository to find Id and use that) - GET

    //Employees add one (pass in params) POST

    //Employees edit one by ID (can pass in name, then use repository to find Id and use that) - PUT

    //Employee delete one by ID (can pass in name, then use repository to find Id and use that) - DELETE




    @GetMapping("/employee")
    public List <Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }




@GetMapping("/department/{id}/employee")
    public List<Employee> getAllEmployeesInDepartment(@PathVariable(name = "id")Long dept_id){
     return  employeeService.getAllEmployeesInDepartment(dept_id);
    }

    @GetMapping("/department/{departmentId}/employee/{employeeId}")
    public Employee getOne(@PathVariable(name = "departmentId") Long departmentId, @PathVariable(name = "employeeId")String employeeName){
        return employeeService.getOneEmployeeByDepartment(departmentId, employeeName);
    }


    @GetMapping("/employee/{id}")
        public Employee getEmployeeByName(@PathVariable(name = "id") Long id){

        return employeeService.getEmployeeFromIdAllDepartments(id);

    }

    @PostMapping("/department/{id}/employee")
    public void addEmployee(@PathVariable(name = "id")Long departmentId, @RequestParam(name = "name") String name, @RequestParam(name = "email")String email){
        employeeService.addEmployee(departmentId, name, email);
    }

    @PutMapping("/employee/{empid}")
    public void editEmployee(@PathVariable(name = "empid")Long emp_id,@PathVariable(name = "id") Long dept_id, @RequestParam(name = "name")String newName, @RequestParam(name = "email")String newEmail){
        employeeService.editEmployee(emp_id, newName, newEmail, dept_id);
    }

    @DeleteMapping("/employee/{empid}")
    public void deleteEmployee(@PathVariable(name = "empid") Long empid){
        employeeService.deleteEmployee(empid);
    }



}

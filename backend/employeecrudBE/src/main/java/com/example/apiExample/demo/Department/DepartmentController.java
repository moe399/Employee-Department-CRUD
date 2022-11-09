package com.example.apiExample.demo.Department;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    // GET ALL - GET

    // GET ONE(ID) - GET

    // ADD ONE - POST

    // UPDATE ONE(REQUESTBODY) - PUT

    // DELETE ONE(REQUESTBODY) - DELETE

    @GetMapping(path = "/department")
    public List<Department> getDepartments() {

        return departmentService.getDepartments();

    }

    @GetMapping(path = "/department/{departmentId}")
    public Optional<Department> getOneDepartment(@PathVariable(name = "departmentId") Long departmentId) {
        System.out.println("Hit GetOneDepartmentApi");
        return departmentService.getDepartment(departmentId);

    }


    @GetMapping("/department/getdept/{employeeId}")
    public Department getDepartmentByEmployee(@PathVariable(name = "employeeId") Long id){
        return departmentService.getEmployeeDepartment(id);

    }


    @PostMapping(path = "/department")
    public void addDepartment(@RequestParam(name="departmentName") String departmentName) {

        departmentService.addDepartment(departmentName);

    }

    @PutMapping("/department/{id}")
    public void editDepartment(@PathVariable(name = "id") Long id, @RequestParam(name = "name") String name) {


        departmentService.updateDepartment(name, id);

    }

    @DeleteMapping("/department/{id}")
    public void deleteDepartment(@PathVariable(name = "id") Long id){

       departmentService.deleteDepartment(id);
    }

}

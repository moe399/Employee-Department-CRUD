package com.example.apiExample.demo.Department;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {


    private DepartmentRepository departmentRepository;


    @Autowired
    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }



    //GET ALL - HTTP/GET

    public List<Department> getDepartments(){

     return departmentRepository.findAll();


    }



    public Department getEmployeeDepartment(Long id){

        return departmentRepository.findDepartmentByEmployees_Id(id);

    }




    //GET ONE BY ID - HTTP/GET

    public Optional<Department> getDepartment(Long id){

      return departmentRepository.findById(id);

    }

    //ADD ONE - HTTP/POST

    public void addDepartment(Department department){

        departmentRepository.save(department);


    }


    //UPDATE - HTTP/PUT

    @Transactional
    public void updateDepartment(String name, Long id){

//      Optional <Department> department = departmentRepository.findById(id);


        Department department = departmentRepository.findById(id).orElseThrow(() -> new IllegalStateException("student id doesn't exist"));

        department.setName(name);


    }

    //DELETE - HTTP/DELETE

    public void deleteDepartment(Long id){

        departmentRepository.deleteById(id);

    }







}

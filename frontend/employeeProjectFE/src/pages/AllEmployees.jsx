import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, createStyles, styled } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { padding } from "@mui/system";
import { Link } from "react-router-dom";
import axios from "axios";
import { Add, Api, Co2Sharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import EmployeeCardComp from "../Components/EmployeeCardComp";
import AddEmployee from "../Components/AddEmployee";
import SendToDepartmentModal from "../Components/SendToDepartmentModal";
import AddDepartment from "../Components/AddDepartment";


function AllEmployees() {

    const [employees, setEmployees] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [departments, setDepartments] = useState([]);

    const [triggerUseEffect, setTriggerUseEffect] = useState();



    const [addDepartmentModalState, setAddDepartmentModalState] = useState(false);


    const [addADepartmentForm, setAddADepartmentForm] = useState(false);


    function getDepartments() {
        axios.get("http://localhost:8080/department")
            .then(res => setDepartments(res.data))
            .catch(error => console.log(error))
    }

    function closeModal() {

        setModalState(false);
        setTimeout(function () { refreshEmployees() }, 500)
        console.log("here")

    }

    function closeAddEmployeeModal() {
        setAddDepartmentModalState(false);
        getDepartments();
    }


    function openAddDepartmentForm() {
        console.log("reached this part")
        setAddDepartmentModalState(false)
        setAddADepartmentForm(true)
        getDepartments();
      
    }

    function closeAddDepartmentForm() {
        setAddADepartmentForm(false);
        refreshDepartments();
    }



    function refreshDepartments() {

        setTimeout(() => {

            getDepartments();

        }, 300)

    }


 


    function refreshEmployees() {
        axios.get("http://localhost:8080/employee")
            .then(res => {
                setEmployees(res.data)
            })
            .catch(error => {
                console.log(error);
            })
        console.log("refreshed employees")

        refreshDepartments()
    }

    useEffect(() => {
        axios.get("http://localhost:8080/employee")
            .then(res => {
                setEmployees(res.data);
            })

        getDepartments();
    },



        []);

    function checkIfEmployeeDeleted() {
        refreshEmployees();
    }


    return (
        <>
            <Container xs={12} md={12} lg={6} xl={4} sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 15 }}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Employee Page</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraphy>This page displays a list of all employees </Typography>
                <div>

                    <Grid container spacing={2} justifyContent="center">
                        <Grid item sx>
                            <Link to="/employees"><Button variant="contained" color="primary" onClick={refreshEmployees}>Refresh</Button></Link>
                        </Grid>

                        <Grid item>
                            <Button variant="outlined" color="primary" onClick={() => {departments.length == 0 ? setAddDepartmentModalState(true) : setModalState(true)} }>Add an employee</Button>
                        </Grid>

                        <Grid item container justifyContent={"center"} sx={{}} direction={"row"} spacing={2} >
                            {employees.map(emp => (
                                <Grid item>  <EmployeeCardComp refreshEmployees={refreshEmployees} employeeName={emp.name} {...emp} key={emp.id} employeeId={emp.id} employeeDepartment={emp.departmentName} employeeDepartmentID={emp.departmentId} employeeEmail={emp.email} checkIfDeleted={checkIfEmployeeDeleted} /> </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>


                    
                               
                  
           


               {/* { departments.length == 0 ? setAddDepartmentModalState(true) : (<h1>aaa</h1>)} */}



            
                
                <AddEmployee modalState={modalState} closeModal={closeModal} departments={departments} triggerUseEffect={triggerUseEffect}/> 

                <SendToDepartmentModal modalState={addDepartmentModalState} closeModal={closeAddEmployeeModal} addDepartmentForm={openAddDepartmentForm} />

                <AddDepartment modalState={addADepartmentForm} handleClose={closeAddDepartmentForm} />

            </Container>
        </>
    )

}

export default AllEmployees;
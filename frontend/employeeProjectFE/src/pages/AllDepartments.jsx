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
import AddEmployee from "../Components/AddEmployee";
import DepartmentCard from "../Components/DepartmentCard";
import AddDepartment from "../Components/AddDepartment";




function AllDepartments() {

    function handleClose(){
        setAddDepartmentModalState(false);
        refresh();
    }

    const [departments, setDepartments] = useState([]);

    const [addDepartmentModalState, setAddDepartmentModalState] = useState(false);
    

    useEffect(() => {
        getDepartments();
    }, [])

    function getDepartments() {
        axios.get("http://localhost:8080/department")
          .then(res => {
            setDepartments(res.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    
      function refresh(){

        setTimeout(() => {
            getDepartments();
        }, 500)

      }



    return (
        <>
            <Container xs={12} md={12} lg={6} xl={4} sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 15 }}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Departments Page</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraphy>This page displays a list of all departments </Typography>
                <div>


                    <Grid sx={{display: "flex", flexDirection:"column", gap: 10}}>

                    <Grid item container spacing={2} justifyContent="center">
                        <Grid item sx>
                            <Link to="#"><Button variant="contained" color="primary" onClick={() => refresh()}>Refresh</Button></Link>
                        </Grid>

                        <Grid item>
                            <Button variant="outlined" color="primary" onClick={() => setAddDepartmentModalState(true)}>Add a department</Button>
                           
                        </Grid>

                       
                    </Grid>

                    <Grid item container spacing ={2} justifyContent="center" >
                    {departments.map((depts) => {

                        return(
                           <Grid item> <DepartmentCard refresh={refresh} departmentName={depts.name} numberOfEmployees={depts.numberOfEmployeesInDepartment} departmentId={depts.id}/></Grid>
                        )

                    })}


                    </Grid>


                    </Grid>

                    <AddDepartment handleClose={handleClose}modalState={addDepartmentModalState}/>

                </div>
               
            </Container>
        </>
    )

}

export default AllDepartments;
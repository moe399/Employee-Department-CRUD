import React from "react";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, createStyles, styled} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { padding } from "@mui/system";
import {Link} from "react-router-dom";
import axios from "axios";
import { Api } from "@mui/icons-material";
import { useEffect, useState} from "react";
import CardComp from "../Components/CardComp";







    const allEmployees = [];

 
 function AllEmployees(){

    const [employees, setEmployees] = useState([]);




     function refreshEmployees(){

         axios.get("http://localhost:8080/employee")
             .then(res => {
                 setEmployees(res.data)

             })
             .catch(error => {
                 console.log(error);
             })

     }




    useEffect(() => {

        axios.get("http://localhost:8080/employee")
        .then(res => {

            setEmployees(res.data);


        })




    },[]);



  


    return(
        <>
        


        <Container xs={12} md={12} lg={6} xl={4} sx={{display:"flex", flexDirection:"column", gap:1, marginTop:15, border:"5px solid green"}}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Employee Page</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraphy>This page displays a list of all employees </Typography>

                

                    <div>

                        <Grid container spacing={2} justifyContent="center">
                        
                        <Grid item sx>
                        <Link to="/employees"><Button variant="contained" color="primary" onClick={refreshEmployees}>Refresh</Button></Link>
                        </Grid>

                         <Grid item>
                        <Button variant="outlined" color="primary" onClick={() => console.log(employees[1])}>Delete an employee</Button>
                        </Grid>








                            <Grid item container justifyContent={"center"} sx={{border: "5px solid red"}} direction={"row"} spacing={2} >

                              {employees.map(emp => (
                                  <Grid item>  <CardComp  employeeName={emp.name} {...emp} key={emp.id} employeeDepartment={emp.departmentName}/> </Grid>


                                ) )}


                            </Grid>





                        </Grid>






                    </div>



                    


                </Container>
        
        </>
    )

}

export default AllEmployees;
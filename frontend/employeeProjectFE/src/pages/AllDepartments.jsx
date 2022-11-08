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
import CardComp from "../Components/CardComp";
import AddEmployee from "../Components/AddEmployee";


function AllDepartments() {





    return (
        <>
            <Container xs={12} md={12} lg={6} xl={4} sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 15 }}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Departments Page</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraphy>This page displays a list of all departments </Typography>
                <div>

                    <Grid container spacing={2} justifyContent="center">
                        <Grid item sx>
                            <Link to="/employees"><Button variant="contained" color="primary" >Refresh</Button></Link>
                        </Grid>

                        <Grid item>
                            <Button variant="outlined" color="primary" >Add a department</Button>
                        </Grid>
                       
                    </Grid>
                </div>
               
            </Container>
        </>
    )

}

export default AllDepartments;
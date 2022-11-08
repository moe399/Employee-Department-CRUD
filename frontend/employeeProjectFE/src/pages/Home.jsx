import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, createStyles, styled } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { padding } from "@mui/system";
import { Link } from "react-router-dom";
// import CardComp from "./Components/CardComp";
import Header from "./../Components/Header";
import { useEffect, useState } from "react";


function Home() {


    const { department, setDepartment } = useState("");
    return (

        <div>
            <main>
                <div>
                    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 15 }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Home</Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraphy>A simple React Application using MUI and a Java Spring Rest API</Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item sx>
                                    <Link to="/employees"><Button variant="contained" color="primary">Get all Employees</Button></Link>
                                </Grid>
                                <Grid item>
                                   <Link to="/departments"> <Button variant="outlined" color="primary">Get All Departments</Button></Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </div>



    );
}

export default Home;
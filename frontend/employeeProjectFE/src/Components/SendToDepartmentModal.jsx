import { Modal, Button, Container, Grid, Box, TextField, Typography, MenuItem, Menu } from "@mui/material"
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddDepartment from "./AddDepartment";





function SendToDepartmentModal(props) {
    const [AddDepartmentModalState, setAddDepartmentModalState] = useState(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4
      };

    return ( <>

    <Modal 
    open={props.modalState}
    >

        <Box sx={style}>

            <Typography variant="h4"><strong>Uh Oh! </strong>There are no departments to add an employee in</Typography>
            <Typography variant="h7">Add a department first then head back here to add an employee</Typography>

           
          <Button variant="contained" onClick={() => props.addDepartmentForm()}>Add a Department</Button> 
          <Button variant="outlined" color="error" onClick={props.closeModal}>Cancel</Button>

        </Box>



    </Modal>

 

    

    </> );
}

export default SendToDepartmentModal;
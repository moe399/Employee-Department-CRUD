import { HeadphonesBattery } from "@mui/icons-material";
import {Modal, TextField, Box, Grid, Container, Button, Typography} from "@mui/material"
import { ErrorResponse } from "@remix-run/router";
import axios from "axios";
import {useState} from 'react'

function AddDepartment(props) {

   const [departmentName, setDepartmentName] = useState("");


   function handleSubmit(){

    axios.post(`http://localhost:8080/department?departmentName=${departmentName}`)
    .then(result => {console.log(result.status)})
    .catch(error => {console.log(error)})
    props.handleClose();
    

   }

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
   return ( 
   
   <>

   <Modal
   open={props.modalState}
   onChange={(event) => setDepartmentName(event.target.value) }>

    <Box sx={style}>
    <Typography variant="h4">Add a Department</Typography>
    <TextField label={"Name"}></TextField>
    <Grid justifyContent={"center"}>
    <Container sx={{ display: "flex", gap: 4, justifyContent:"center" }}>
              <Button variant="contained" onClick={() => handleSubmit()} >Submit</Button>
              <Button variant="outlined" color="error" onClick={() => props.handleClose()}>Cancel</Button>
              <Button onClick={() => console.log(departmentName())}>Test</Button>
            </Container>
            </Grid>
    </Box>
    
    
   </Modal>
    
    </>
     );
}

export default AddDepartment;
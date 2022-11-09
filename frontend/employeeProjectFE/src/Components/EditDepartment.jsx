import { Modal, Button, Container, Grid, Box, TextField, Typography, MenuItem, Menu } from "@mui/material"
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function EditDepartment(props) {


  const [departmentName, setDepartmentName] = useState(props.departmentName);


  function handleSubmit() {

    axios.put(`http://localhost:8080/department/${props.departmentId}?name=${departmentName}`)
      .then(result => { console.log("http://localhost:8080/department/${props.departmentId}?name=${setDepartmentName}") })
      .catch(error => { console.log(error) })

    props.closeModal();

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
      >
        <Box sx={style}>
          <Typography variant="h5">Editing details for {props.departmentName} Department </Typography>
          <Container sx={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "center" }}>

            <TextField
              label="Name"
              defaultValue={departmentName}
              onChange={(event) => { setDepartmentName(event.target.value) }}

            ></TextField>


            <Container sx={{ display: "flex", gap: 4 }}>
              <Button variant="contained" onClick={() => { handleSubmit() }} >Submit</Button>
              <Button variant="outlined" color="error" onClick={props.closeModal} >Cancel</Button>
              <Button onClick={() => console.log(props.departmentId)}>test</Button>

            </Container>
          </Container>


        </Box>
      </Modal>
    </>
  );
}

export default EditDepartment;
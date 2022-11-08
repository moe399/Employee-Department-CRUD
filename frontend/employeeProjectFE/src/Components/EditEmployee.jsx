
import { Modal, Button, Container, Grid, Box, TextField, Typography, MenuItem, Menu } from "@mui/material"
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function EditEmployee(props) {


  useEffect(() => {
    getDepartmentsFromDB()
  }, [])


  function handleSubmit() {
    axios.put(`http://localhost:8080/employee/${employeeId}?name=${newEmployeeName}&email=${newEmployeeEmail}&department_id=${newEmployeeDepartment}`)
      .then(res => { setStatusCode(res.status) })
      .catch(error => { console.log(error) })

    if (statusCode === 200) {
      props.closeModal();
    }
  }

  function getDepartmentsFromDB() {
    axios.get("http://localhost:8080/department")
      .then(res => {
        setdepartmentFromDB(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }


  const [statusCode, setStatusCode] = useState(0);
  const [departmentsFromDB, setdepartmentFromDB] = useState([]);

  const [employeeId, setEmployeeId] = useState(props.employeeId);
  const [newEmployeeName, setNewEmployeeName] = useState(props.employeeName);
  const [newEmployeeEmail, setNewEmployeeEmail] = useState(props.employeeEmail);
  const [newEmployeeDepartment, setNewEmployeeDepartment] = useState(props.employeeDepartment);

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
          <Typography variant="h4">Editing Employee Information for {props.employeeName} </Typography>
          <Container sx={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "center" }}>

            <TextField
              label="Employee Name"
              defaultValue={props.employeeName}
              onChange={(event) => setNewEmployeeName(event.target.value)}
            />

            <TextField
              label="Employee Email"
              defaultValue={props.employeeEmail}
              onChange={(event) => setNewEmployeeEmail(event.target.value)}
            />

            <TextField
              select
              label={props.employeeDepartment}
            >
              {departmentsFromDB.map(depts => {
                return (
                  <MenuItem key={depts.id} value={depts.name} onClick={() => { setNewEmployeeDepartment(depts.id) }}>{depts.name}</MenuItem>
                )
              })}
            </TextField>

            <Container sx={{ display: "flex", gap: 4 }}>
              <Button variant="contained" onClick={() => { handleSubmit() }} >Submit</Button>
              <Button variant="outlined" color="error" onClick={props.closeModal} >Cancel</Button>
              <Button onClick={() => console.log(departmentsFromDB)}>Test</Button>
            </Container>
          </Container>
        </Box>
      </Modal>
    </>
  );
}

export default EditEmployee;
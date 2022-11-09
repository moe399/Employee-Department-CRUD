import { Box, Modal, Typography, Container, Grid, Button, TextField, Select, MenuItem, getToggleButtonUtilityClass } from "@mui/material";

import { useState, useEffect, useLayoutEffect } from "react";

import axios from "axios";

function AddEmployee(props) {
  let header = {
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
  function handleSubmitA() {
    axios.post(`http://localhost:8080/department/${employeeDepartment}/employee?name=${employeeName}&email=${employeeEmail}`, header)
      .then((response) => { setStatusCode(response.status) })
      .catch(error => {

        console.log("used this url " + `http://localhost:8080/department/${employeeDepartment}/employee?name=${employeeName}&email=${employeeEmail}`)

        console.log(error)
      })
    props.closeModal()
  }

  // const [onGetDepartments, setOnGetDepartments] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState(0);
  const [statusCode, setStatusCode] = useState(0);
  const [newEmployeeVals, setNewEmployeeVals] = useState({

    name: "",
    email: "",
    departmentId: ""

  });

  function getDepartments() {

    axios.get("http://localhost:8080/department")
      .then(result => setDepartments(result.data))
      .catch(error => console.log(error))
  }

  function handleListChange(event) {
    console.log(event.value.name)

  }


  useEffect(() => {



    axios.get("http://localhost:8080/department")
    .then(result => setDepartments(result.data))
    .catch(error => console.log(error))
    
  },[props.modalState])


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
        onClose={props.closeModal}>

        <Box sx={style}>
          <Typography variant="h4">Add an employee</Typography>
          <Container sx={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "center" }}>
            <TextField
              required
              id="outlined-required"
              label="Full name"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
              name="name"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              onChange={(event) => setEmployeeEmail(event.target.value)}
              name="email"
            />

            <TextField
              label="Select Department"
              name="department"
              select>

              {departments.map(depts => {

                return (
                  <MenuItem key={depts.id} value={depts.name} onClick={() => { setEmployeeDepartment(depts.id) }}>{depts.name}</MenuItem>
                )

              })}

            </TextField>
            <Container sx={{ display: "flex", gap: 4 }}>
              <Button variant="contained" onClick={() => { handleSubmitA() }}>Submit</Button>
              <Button variant="outlined" color="error" onClick={() => props.closeModal()}>Cancel</Button>
              <Button onClick={() => {console.log(departments)}}>Test</Button>
            </Container>
          </Container>
        </Box>
      </Modal>

    </>
  );
}

export default AddEmployee;
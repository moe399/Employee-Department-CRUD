import {Modal, Box, Typography, Button, List, ListItem, ListItemIcon, IconButton, ListItemText} from "@mui/material";
import {useState, useEffect} from "react";
import axios from "axios";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { DeleteOutlined } from "@mui/icons-material";


function DepartmentEmployees (props) {

    const [employeesWithinDepartment, setEmployeesWithinDpeartment] = useState([]);

    function getEmployeesWithinDepartment(){

        axios.get(`http://localhost:8080/department/${props.departmentId}/employee`)
        .then(res => {setEmployeesWithinDpeartment(res.data)})
        .catch(error => {console.log(error)})

    }

    function deleteEmployee(employeeId){
        axios.delete(`http://localhost:8080/employee/${employeeId}`)
        .catch(error => {console.log(error)})
    }


    useEffect(() => {

        getEmployeesWithinDepartment()
    }, [])



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        maxHeight: "100%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,

      };


    return ( 

        <>

        <Modal 
        sx={{overflow:"scroll", height: "100%"}}
        open={props.modalState}
        onClose={props.closeModal}
        
        > 
        

        <Box sx={style}>

        <Typography variant="h6">Employees within {props.departmentName} Department</Typography>


        <List>
            {employeesWithinDepartment.map(employee => {

                return(

                    <>
        <ListItem><ListItemText>{employee.name} </ListItemText><IconButton onClick={() => {deleteEmployee(employee.id)}} edge="end"><DeleteOutlineOutlined/></IconButton></ListItem>
  

        </>
                
          )  })}
            
       
        </List>



        </Box>




        </Modal>

        </>
     );
}


export default DepartmentEmployees;
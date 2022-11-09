import { Button, Card, CardActions, CardContent, CardMedia, CSS, IconButton, Link, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState, useEffect } from "react";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import ModeIcon from '@mui/icons-material/Mode';
import InfoIcon from '@mui/icons-material/Info';
import EditEmployee from "./EditEmployee";




function EmployeeCardComp(props) {
    const [modalState, setModalState] = useState(false);

    function closeModal() {
        setModalState(false);
        setTimeout(function () { props.refreshEmployees() }, 500)
    }

    function deleteEmployee() {
        axios.delete(`http://localhost:8080/employee/${props.employeeId}`)
            .then(() => props.checkIfDeleted())
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia>

                    <CardContent>
                        <Typography variant="h5">{props.employeeName}</Typography>
                        <Typography variant="h6">Works in: {props.employeeDepartment} Department </Typography>
                        <Typography variant="h7">Email: <Link to="#" onClick={(event) => {window.location = `mailto:${props.employeeEmail}`}}>{props.employeeEmail}</Link></Typography>
                    </CardContent>


                    <CardActions>
                        <IconButton onClick={() => setModalState(true)}><ModeIcon /></IconButton>
                        <IconButton onClick={deleteEmployee}><DeleteOutlineOutlinedIcon /></IconButton>
                    </CardActions>
                

                </CardMedia>
                <EditEmployee modalState={modalState} closeModal={closeModal} employeeId={props.employeeId} employeeName={props.employeeName} employeeEmail={props.employeeEmail} employeeDepartment={props.employeeDepartment} employeeDepartmentID={props.employeeDepartmentID} />

            </Card>

        </>
    );
}

export default EmployeeCardComp;
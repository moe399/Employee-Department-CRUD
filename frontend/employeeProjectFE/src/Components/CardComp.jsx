import { Button, Card, CardActions, CardContent, CardMedia, CSS, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState, useEffect } from "react";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import ModeIcon from '@mui/icons-material/Mode';
import InfoIcon from '@mui/icons-material/Info';
import EditEmployee from "./EditEmployee";




function CardComp(props) {
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
                        <Typography variant="h4">{props.employeeName}</Typography>
                        <Typography variant="h6">Works in: {props.employeeDepartment} Department </Typography>

                    </CardContent>


                    <CardActions>
                        <IconButton onClick={() => console.log(props.employeeId)}><InfoIcon /></IconButton>
                        <IconButton onClick={() => setModalState(true)}><ModeIcon /></IconButton>
                        <IconButton onClick={deleteEmployee}><DeleteOutlineOutlinedIcon /></IconButton>
                    </CardActions>
                    <Typography>{props.employeeEmail}</Typography>
                </CardMedia>
                <EditEmployee modalState={modalState} closeModal={closeModal} employeeId={props.employeeId} employeeName={props.employeeName} employeeEmail={props.employeeEmail} employeeDepartment={props.employeeDepartment} />

            </Card>

        </>
    );
}

export default CardComp;
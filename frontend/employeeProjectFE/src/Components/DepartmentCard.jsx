
import { Card, Box, Container, Typography, Grid, CardContent, CardMedia, CardActions, IconButton } from "@mui/material"
import ModeIcon from '@mui/icons-material/Mode';
import InfoIcon from '@mui/icons-material/Info';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import pluralize from "pluralize";
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState } from "react";
import DepartmentEmployees from "./DepartmentEmployees";
import EditDepartment from "./EditDepartment";
import axios from "axios";


function DepartmentCard(props) {

    const [listModalState, setListModalState] = useState(false);
    const [editModalState, setEditModalState] = useState(false);

    function handleListCloseModal() {

        setListModalState(false);

    }

    function handleEditCloseModal() {

        setEditModalState(false);

        props.refresh();

    }

    function deleteDepartment() {
        axios.delete(`http://localhost:8080/department/${props.departmentId}`)
            .then(result => console.log(result.status))
            .catch(error => { console.log(error) })
        props.refresh();
    }

    return (

        <>
            <Card sx={{ maxWidth: 345 }}>

                <CardMedia>

                    <CardContent>
                        <Typography variant="h5">{props.departmentName} Department</Typography>
                        <Typography variant="p">This department has {props.numberOfEmployees} {pluralize('employee', props.numberOfEmployees)}</Typography>
                    </CardContent>


                    <CardActions>
                        <IconButton onClick={() => setListModalState(true)}><PeopleIcon /></IconButton>
                        <IconButton onClick={() => setEditModalState(true)}><ModeIcon /></IconButton>
                        <IconButton onClick={() => deleteDepartment()} ><DeleteOutlineOutlinedIcon /></IconButton>
                    </CardActions>


                </CardMedia>

            </Card>

            <DepartmentEmployees modalState={listModalState} closeModal={handleListCloseModal} departmentName={props.departmentName} departmentId={props.departmentId} />
            <EditDepartment modalState={editModalState} closeModal={handleEditCloseModal} departmentName={props.departmentName} departmentId={props.departmentId} />

        </>


    );
}

export default DepartmentCard;
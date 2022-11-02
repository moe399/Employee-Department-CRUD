import {Button, Card, CardActions, CardContent, CardMedia, CSS, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useState, useEffect} from "react";
import axios from "axios";
import {wait} from "@testing-library/user-event/dist/utils";





function CardComp(props) {



    function deleteEmployee(){

        axios.delete(`http://localhost:8080/employee/${props.employeeId}`)
        .then(() => props.checkIfDeleted())
        .catch(error => {
            console.log(error)
        })
    
    }


    const [deleted, setDeleted] = useState(false);


    // if(setDeleted == true){
    //     props.checkIfDeleted();
    // }




    return (  


    <>


    <Card sx={{maxWidth: 345}}>
        <CardMedia>

            <CardContent>
                <Typography variant="h4">{props.employeeName}</Typography>
                <Typography variant="h6">Works in: {props.employeeDepartment} Department </Typography>

            </CardContent>

            
            <CardActions>
            <Button onClick={() => console.log(props.employeeId)}>Learn more about Teacher</Button>
            <IconButton onClick={deleteEmployee}><DeleteOutlineOutlinedIcon/></IconButton>
            </CardActions>


    
        



        </CardMedia>




    </Card>







    </>
    );
}

export default CardComp;
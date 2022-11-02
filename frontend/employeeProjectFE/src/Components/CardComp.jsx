import {Button, Card, CardActions, CardContent, CardMedia, CSS, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useState, useEffect} from "react";
import axios from "axios";
import {wait} from "@testing-library/user-event/dist/utils";


function deleteEmployee(){

    axios.delete("")

}




function CardComp(props) {







    return (  


    <>


    <Card sx={{maxWidth: 345}}>
        <CardMedia>

            <CardContent>
                <Typography variant="h4">{props.employeeName}</Typography>
                <Typography variant="h6">Works in: {props.employeeDepartment} Department </Typography>

            </CardContent>

            
            <CardActions>
            <Button>Learn more about Teacher</Button>
            <IconButton onClick={() => console.log("hello")}><DeleteOutlineOutlinedIcon/></IconButton>
            </CardActions>

        



        </CardMedia>




    </Card>







    </>
    );
}

export default CardComp;
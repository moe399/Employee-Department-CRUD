import { CssBaseline, AppBar, Toolbar, Button, Typography, Container, IconButton } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from "react-router-dom";



function Header() {
    return (

        <>
            <CssBaseline />
            <AppBar position="relative">

                <Toolbar sx={{ display: "Grid"}}>


                    <Container sx={{ display: "flex", justifyContent: "center", width: "10%" }}>

                        <Container sx={{display: "flex", gap: 2}}>
                        <MenuBookIcon sx={{alignSelf:"center"}} />
                        <Typography variant="h6">Api Test</Typography>
                        </Container>

                    </Container>

                    <Container sx={{ display: "flex", gap: 2, width: "fit-content" }}>

                        <Link to={"/"}><Typography variant="h6" color="white">Home</Typography></Link>
                        <Link to={"/employees"}><Typography variant="h6" color="white">Employees</Typography></Link>
                        <Link to={"/departments"}><Typography variant="h6" color="white">Departments</Typography></Link>

                    </Container>


                </Toolbar>


            </AppBar>

        </>
    );
}

export default Header;
import { CssBaseline, AppBar, Toolbar, Typography, Container, IconButton } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from "react-router-dom";



function Header() {
    return (

        <>
            <CssBaseline />
            <AppBar position="relative">

                <Toolbar>

                    
                    <Container sx={{ display: "flex", justifyContent: "center" }}>

                        
                        <MenuBookIcon/>
                        <Typography variant="h6">Api Test</Typography>
                       
                    </Container>
                    
                 

                </Toolbar>
            </AppBar>

        </>
    );
}

export default Header;
import {CssBaseline, AppBar, Toolbar, Typography} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';


function Header() {
    return (

        <>
        <CssBaseline/>
        <AppBar position="relative">

        <Toolbar>
            
            <MenuBookIcon></MenuBookIcon>
        <Typography variant="h6">Api Test</Typography>
            
        </Toolbar>
        </AppBar>

</>
      );
}

export default Header;
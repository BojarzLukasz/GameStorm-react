import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {GamepadOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

const CustomAppBar = () => {

return(
        <AppBar style={{backdropFilter: 'blur(3px)'}}>
            <Toolbar>
                <GamepadOutlined sx={{mr: 2}} fontSize="large"/>
                  <Typography variant='h3'>
                        Gamestore
                  </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar;
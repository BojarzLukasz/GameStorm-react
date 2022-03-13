import React, {useState} from 'react';
import {AppBar, Avatar, Toolbar, Typography, Button} from "@mui/material";
import {GamepadOutlined} from "@mui/icons-material";
import {auth} from "../firebase-config";
import {signOut} from "firebase/auth"

const CustomAppBar = ({user}) => {
    const [loggedIn, setLoggedIn] = useState(null)
    auth.onAuthStateChanged((user) => {
        if(user){
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    })
    async function logOut() {
        signOut(auth);
    }
    return(
        <AppBar style={{
            backdropFilter: 'blur(3px)',
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"}}>
            <Toolbar>
                <GamepadOutlined sx={{mr: 2}} fontSize="large"/>
                <Typography variant='h3'>
                    Gamestore
                </Typography>
            </Toolbar>
            {loggedIn && <Toolbar>
                <Typography sx={{ fontSize: 25}}>{user}</Typography>
                <Avatar sx={{ m: 1, mr: 3, bgcolor: 'secondary.main' }}/>
                <Button href="/" variant="contained" color='secondary' onClick={logOut}>
                    <Typography>Log Out</Typography>
                </Button>
            </Toolbar>}
        </AppBar>
    )
}
export default CustomAppBar;

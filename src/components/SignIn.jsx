import React, {useEffect, useState} from 'react'
import {Container, Box, Avatar, Typography, FormControlLabel, Grid, Button, Checkbox} from '@mui/material'
import customTheme from '../customTheme'
import { ThemeProvider } from "@mui/material";
import {Link} from "react-router-dom";
import {CssTextField} from "../customTheme";

const SignIn = () => {


    useEffect(() => {
        fetchItems();
    }, [])

    const [games, setGames] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.rawg.io/api/games?key=ec3a8cae002c48538ce195406a786904');
        const games = await data.json();
        console.log(games.results);
        setGames(games);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }



    return(
        <>
            <ThemeProvider theme={customTheme}>
                    <Container sx={{pt: 17, display: 'flex', justifyContent: 'center', alignContent: 'center'}} maxWidth="l">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width:700,
                                height: 500,
                                backgroundColor: 'primary.main',
                                borderRadius: 5,
                                backdropFilter: 'blur(3px)',
                                color: 'white',
                                p: 5
                                }}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <CssTextField
                                    autoComplete= "off"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoFocus
                                />
                                <CssTextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="secondary" sx={{color: 'white'}}/>}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    color='secondary'
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to='/Forgot' style={{textDecoration: 'none', color: 'white'}}>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to='/SignUp' style={{textDecoration: 'none', color: 'white'}}>
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
            </ThemeProvider>
        </>
    );
}

export default SignIn;
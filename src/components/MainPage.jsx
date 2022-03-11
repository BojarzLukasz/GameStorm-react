import React, {useEffect, useState} from "react"
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase-config";
import {useNavigate} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {ItemXs, Item} from "../customTheme";


const MainPage = () =>  {

    const [user, setUser] = useState("Użytkownik niezalogowany");

    const navigate = useNavigate()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
                setUser(user.email);
            }
        });
        return () => unsubscribe();
    }, []);


    useEffect(() => {
        fetchItems();
    }, [])

    const [games, setGames] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://api.rawg.io/api/games?key=ec3a8cae002c48538ce195406a786904')
        const games = await data.json()
        console.log(games.results)
        setGames(games)
    };



    return(
        <>
            <Box sx={{ flexGrow: 1, pt: 10}}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>xs</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                    </Grid>
                    <Grid item xs>
                        <Item>xs</Item>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, pr: 10, pl: 10, pt: 10}}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, pr: 10, pl: 10, pt: 10}}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, pr: 10, pl: 10, pt: 10}}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, pr: 10, pl: 10, pt: 10}}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                    <Grid item xs>
                        <ItemXs>xs</ItemXs>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default MainPage;
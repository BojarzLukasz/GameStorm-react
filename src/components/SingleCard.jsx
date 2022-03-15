import React, {useEffect, useState} from 'react'
import {Container, Box, ThemeProvider, Typography, Grid} from '@mui/material'
import customTheme, {ItemXs} from '../customTheme'
import {useParams} from "react-router-dom";

const SingleCard = () => {
    const params = useParams()
    const [game, setGame] = useState()
    useEffect(()=> {
        const singleCardApiUrl = `https://api.rawg.io/api/games/${params.itemSlug}?key=ec3a8cae002c48538ce195406a786904`
        fetch(singleCardApiUrl)
            .then(data => data.json())
            .then(json => setGame(json))
    },[params])
    return(
        <ThemeProvider theme={customTheme}>
            <Container sx={{pt: 12, pb:10, display: 'flex', justifyContent: 'center', alignContent: 'center'}} maxWidth="l">
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}
                     sx={{
                         width: '90vw',
                         minHeight: '80vh',
                         backgroundImage: `url(${game && game.background_image})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         borderRadius: 5,
                         backdropFilter: 'blur(3px)',
                         color: 'white',
                         p: 5
                     }}>
                    <Box gridColumn="span 12">
                        <Grid container spacing={2}>
                            <Grid item xs ={6} md={12}>
                                <ItemXs><Typography variant='h3' textAlign='center'>{game && game.name}</Typography></ItemXs>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <ItemXs>
                                    <Typography variant='h4' textAlign='center'>About</Typography>
                                    <Typography variant='body2'>
                                        {game && game.description_raw}
                                    </Typography>
                                </ItemXs>
                            </Grid>
                            <Grid item xs={6} md={8}>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <ItemXs>
                                    <Typography variant='h6'>Release date</Typography>
                                    <Typography variant='body2'>{game && game.released}</Typography>
                                </ItemXs>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <ItemXs>
                                    <Typography variant='h6'>Developers</Typography>
                                    <Typography variant='body2'>
                                        {game && game.name}
                                    </Typography>
                                </ItemXs>
                            </Grid>
                            <Grid item xs={6} md={8}>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <ItemXs>
                                    <Typography variant='h6'>Platforms</Typography>
                                    <Typography variant='body2'>
                                        {game && game.parent_platforms.map((id)=>{return id.platform.name}).join(", ")}
                                    </Typography>
                                </ItemXs>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <ItemXs>
                                    <Typography variant='h6'>Genre</Typography>
                                    <Typography variant='body2'>{game && game.genres.map((genre)=>{return genre.name }).join(", ")}</Typography>
                                </ItemXs>
                            </Grid>
                            <Grid item xs={6} md={8}>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <ItemXs>
                                    <Typography variant='h6'>Website</Typography>
                                    <Typography variant='body2'>
                                        <a href={game && game.website} style={{color: 'white'}}>
                                            {game && game.website}</a></Typography>
                                </ItemXs>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <ItemXs>
                                    <Typography variant='h6'>Tags</Typography>
                                    <Typography variant='body2'>
                                        {game && game.tags.map((tag)=>{return tag.name }).join(", ")}
                                    </Typography>
                                </ItemXs>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SingleCard;
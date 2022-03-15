import React, {useEffect, useState} from "react"
import {Card, CardMedia, CardContent, Grid} from "@mui/material";
import CustomTheme, {CSSTypography} from "../customTheme";
import {useNavigate} from "react-router-dom";
const CustomCard = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=ec3a8cae002c48538ce195406a786904&page=2&page_size=20')
            .then(data => data.json())
            .then(json => setGames(json.results))
    }, [])
    let navigate = useNavigate();
    return (
        <>
            {games.map((item, index)=> {
                return (
                    <Grid
                        key={index}
                        item lg={3}
                        sx={[
                            {'&:hover': {
                                transform: 'scale(1.1)',
                                    cursor: 'pointer'
                            }}]}
                        style={{
                            transition: '0.3s ease-out',
                        }}
                    >
                        <Card onClick={()=> navigate(`/SingleCard/${item.slug}`)}
                              sx={{
                                  maxWidth: 250,
                                  backgroundColor: CustomTheme.palette.primary.main,
                                  color: CustomTheme.palette.third.main
                              }}
                        >
                            <CardMedia
                                component='img'
                                height="140"
                                image={item.background_image}
                            />
                            <CardContent>
                                <CSSTypography variant="h6" component="div">
                                    {item.name}
                                </CSSTypography>
                                <CSSTypography variant='subtitle'>
                                    Genres: {(item.genres.map((genre) => {
                                        return genre.name
                                    })).join(", ")}
                                </CSSTypography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </>
    )
}
export default CustomCard;

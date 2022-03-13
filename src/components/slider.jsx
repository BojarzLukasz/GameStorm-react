import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {Box} from "@mui/material";
import {Item} from "../customTheme";

export const SimpleSlider = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetchItems();
        }, [])
    const fetchItems = async () => {
        const data = await fetch('https://api.rawg.io/api/games?key=ec3a8cae002c48538ce195406a786904&page_size=5')
        const games = await data.json()
        setGames(games.results)
        console.log(games.results)
    };
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        className: "center",
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };
    return (
        <Box sx={{pt: 10, width: '100%'}}>
            <Slider {...settings}>
                {games.map((item, index)=> {
                    return <Item key={index}
                    >
                        <img src={item.background_image} style={{
                            objectFit: `fill`,
                            width: '100%',
                            height: '100%'
                        }}/>
                    </Item>
                })}
            </Slider>
        </Box>
    );
}

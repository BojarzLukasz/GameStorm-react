import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {Box} from "@mui/material";
import {CSSTypography, Item} from "../customTheme";
import {useNavigate} from "react-router-dom";

export const SimpleSlider = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=ec3a8cae002c48538ce195406a786904&page_size=5')
            .then(data => data.json())
            .then(json => setGames(json.results))
    }, [])
    let navigate = useNavigate();
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
        <Box sx={{pt: 10, width: '110%'}}>
            <Slider {...settings}>
                {games.map((item, index)=> {
                    return <Item key={index}
                    >
                        <div onClick={() => navigate(`/SingleCard/${item.slug}`)} style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url("${item.background_image}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}>
                            <div style={{background: "linear-gradient(180deg, rgba(0,0,0,0.35) 4%, rgba(0,0,0,0.85) 99%)", width: '100%',
                                height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: '20px'}}>
                                <CSSTypography variant='h2'>
                                    {item.name}
                                </CSSTypography>
                            </div>
                        </div>
                    </Item>
                })}
            </Slider>
        </Box>
    );
}

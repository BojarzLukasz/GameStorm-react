import React from "react"
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import {SimpleSlider} from "./Slider";
import CustomCard from "./Cards";
import {useNavigate} from "react-router-dom";
const MainPage = () =>  {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/SingleCard')
    }
    return(
        <>
            <Container
                maxWidth={'lg'}
                style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
                <SimpleSlider/>
            </Container>
            <Container>
                <Grid container
                      spacing={4}
                      style={{justifyContent: 'center'}}
                >
                    <CustomCard onClick={handleClick}/>
                </Grid>
            </Container>
        </>
    )
}
export default MainPage;

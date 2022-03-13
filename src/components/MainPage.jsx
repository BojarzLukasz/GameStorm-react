import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Card, CardMedia, CardContent, CardActions, Button, Typography, Container} from "@mui/material";
import {ItemXs} from "../customTheme";
import {SimpleSlider} from "./slider";
import CustomCard from "./card";


const MainPage = () =>  {

/*
    const [user, setUser] = useState("Użytkownik niezalogowany");

    const navigate = useNavigate()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
                setUser(user?.email);
            }
        });
        return () => unsubscribe();
    }, []);

*/

    return(
        <>
            <Container
                    maxWidth={"xl"}
                    style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
                    <SimpleSlider/>
            </Container>
            <Container>
                <Grid container
                      spacing={4}
                      style={{justifyContent: 'center'}}
                >
                    <CustomCard/>
                </Grid>
            </Container>
        </>
    )
}
export default MainPage;
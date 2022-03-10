import React from 'react'
import {Container, Box, Avatar, Typography, TextField, Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import customTheme from '../customTheme'
import { ThemeProvider } from "@mui/material";


const ForgotPassword = () => {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: customTheme.palette.secondary.main,
            },
            '&. Mui-focused fieldset': {
                borderColor: customTheme.palette.secondary.main,
            },
        },
        '& 	.MuiFormHelperText-filled': {
            backgroundColor: 'red'
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
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
                            Sign Up
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
                                color='secondary'
                                sx={{ input: { color: customTheme.palette.third.main } }}

                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color='secondary'
                            >
                                Reset password
                            </Button>
                        </Box>
                    </Box>
                </Container>

            </ThemeProvider>
        </>
    );
}

export default ForgotPassword;
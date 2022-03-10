import React from 'react'
import {Container, Box, Avatar, Typography, Button} from '@mui/material'
import customTheme from '../customTheme'
import { ThemeProvider } from "@mui/material";
import {CssTextField} from "../customTheme";
import {useFormik} from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }

    const resetPW = async () => {}


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("email required").required("required"),
            password: Yup.string().min(6).required("required")
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    console.log(formik.errors)

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
                            Reset your password
                        </Typography>
                        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                            <CssTextField
                                autoComplete= "off"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
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
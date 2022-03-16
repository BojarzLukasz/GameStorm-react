import React, {useEffect, useState} from 'react'
import {Container, Box, Avatar, Typography, Button, ThemeProvider, Alert, Grid} from '@mui/material'
import {useFormik} from "formik"
import * as Yup from "yup"
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase-config";
import customTheme from '../customTheme'
import {CssTextField} from "../customTheme"
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
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
            register(values.email, values.password)
        }
    })
    const [user, setUser] = useState("Użytkownik niezalogowany");
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/Main');
                setUser(user?.email);
            }
        });
        return () => unsubscribe();
    }, [user, navigate]);
    const [error, setError] = useState('')
    async function register(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
    }
    return(
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        {error && <Alert severity="error">this mail is already used</Alert>}
                        <CssTextField
                            autoComplete= "off"
                            margin="normal"
                            /*required*/
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            color='secondary'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <CssTextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color='secondary'
                        >
                            Sign up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                                    Go back to Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default SignUp;

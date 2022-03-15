import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useFormik} from 'formik'
import * as Yup from "yup"
import {CssTextField} from "../customTheme"
import {Container, Box, Avatar, Typography, FormControlLabel, Grid, Button, Checkbox, ThemeProvider, Alert} from '@mui/material'
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase-config"
import customTheme from '../customTheme'
const SignIn = () => {
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
            login(values.email, values.password)
        }
    })
    const [error, setError] = useState('')
    async function login(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message)
        }
    }
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/Main');
                setUser(user?.email);
            }
        });
        return () => unsubscribe();
        }, [user,navigate]);
    return(
        <ThemeProvider theme={customTheme}>
            <Container sx={{pt: 17, display: 'flex', justifyContent: 'center', alignContent: 'center'}} maxWidth="l">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width:700,
                        minHeight: 500,
                        backgroundColor: 'primary.main',
                        borderRadius: 5,
                        backdropFilter: 'blur(3px)',
                        color: 'white',
                        p: 5
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        {error && <Alert severity="error">invalid email or password</Alert>}
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
                        <CssTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary" sx={{pt: 2, color: 'white'}}/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color='secondary'
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='/Forgot' style={{textDecoration: 'none', color: 'white'}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/SignUp' style={{textDecoration: 'none', color: 'white'}}>
                                    "Don't have an account? Sign Up"
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
export default SignIn;

import React from 'react'
import { ThemeProvider, CssBaseline  } from "@mui/material";
import customTheme from '../customTheme'
import MainPage from "./MainPage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CustomAppBar from "./AppBar";
import ForgotPassword from "./ForgotPassword";


function App() {
    return(
        <>
            <ThemeProvider theme={customTheme}>
                <CssBaseline/>
                <CustomAppBar/>
                <main style={{minHeight: '100vh', background: "linear-gradient(204deg, rgba(104,15,121,1) 0%, rgba(17,12,2,1) 87%)"}}>
                    <Router>
                        <Routes>
                            <Route path='/' element={<MainPage/>} />
                            <Route path='/SignUp' element={<SignUp/>}/>
                            <Route path='/SignIn' element={<SignIn/>} />
                            <Route path='/Forgot' element={<ForgotPassword/>} />
                        </Routes>
                    </Router>
                </main>
            </ThemeProvider>
        </>
    );
}

export default App;
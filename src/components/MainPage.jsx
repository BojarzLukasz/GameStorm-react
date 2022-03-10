import React from "react";
import SignIn from "./SignIn";
import CustomAppBar from "./AppBar";


const MainPage = () =>  {

    return(
        <>
            <CustomAppBar/>
            <main style={{minHeight: '100vh', background: "linear-gradient(204deg, rgba(104,15,121,1) 0%, rgba(17,12,2,1) 87%)"}}>
            </main>
        </>
    )
}

export default MainPage;
import { createTheme } from "@mui/material";

const primaryColor = "rgba(0, 0, 0, 0.60)"
const secondaryColor = "#680f79"
const thirdColor = 'white'
const customTheme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        third: {
            main: thirdColor
        },
    },
    components:{
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                }
            }
        }
    }
})



export default customTheme
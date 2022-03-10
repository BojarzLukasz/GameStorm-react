import {createTheme, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

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
                    color: thirdColor,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    height: 0,
                },
            },
        },
    }
})



export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: thirdColor,
    },
    '& label.Mui-error': {
        color: 'error.main'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: thirdColor,
        },
        '&:hover fieldset': {
            borderColor: secondaryColor,
        },
        '&. Mui-focused fieldset': {
            borderColor: secondaryColor,
        },
    },
    '& input': {
        color: thirdColor
    },
});


export default customTheme;
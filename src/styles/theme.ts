import { createMuiTheme } from '@material-ui/core'
import { orange } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e8caba'
        },
        secondary: {
            main: orange[200]
        },
    },
    typography: {
        fontFamily: 'Montserrat'
    }
});

export const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]
        },
        secondary: {
            main: orange[200]
        },
    }
});
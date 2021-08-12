import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const theme = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
    },
    typography: {
        tab: {
            textTransform: "none",
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        },
    },
});

export default theme;

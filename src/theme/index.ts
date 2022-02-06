import { createTheme } from "@mui/material";
import { PRIMARY_COLOR } from "./../styles/colors";

export default createTheme({
  typography: {
    button: {
      fontSize: "16px",
    },
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: PRIMARY_COLOR,
            color: "#000000",
            fontWeight: "bold",
            height: "50px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "white",
            color: PRIMARY_COLOR,
            fontWeight: "bold",
            height: "50px",
          },
        },
      ],
    },
  },
});

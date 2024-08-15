import { createTheme } from "@mui/material";

export const theme = createTheme({
	direction: "rtl",
	typography: {
		fontFamily: "Vazirmatn",
		fontSize: 14,
	},
	palette: {
		primary: {
			main: "#ffcc00",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: "contained",
			},
		},
	},
});

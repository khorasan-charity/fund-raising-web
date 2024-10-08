import createTheme from "@mui/material/styles/createTheme";
import { grey } from "@mui/material/colors";

const BACKGROUND_COLOR = grey[50];

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true;
		xxxl: true;
	}
}

export const theme = createTheme({
	direction: "rtl",
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
			xxxl: 1920,
		},
	},
	typography: {
		fontFamily: "Vazirmatn",
		fontSize: 14,
		h1: {
			fontWeight: "bold",
		},
		h2: {
			fontWeight: "bold",
		},
		h3: {
			fontWeight: "bold",
		},
		h4: {
			fontWeight: "bold",
		},
		h5: {
			fontWeight: "bold",
		},
		h6: {
			fontWeight: "bold",
		},
	},
	palette: {
		primary: {
			main: "#ffcc00",
		},
		secondary: {
			main: "#612987",
			"200": "#893FBB",
			"800": "#4E216C",
		},
		background: {
			default: BACKGROUND_COLOR,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: "contained",
			},
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: "xxl",
			},
		},
		MuiSkeleton: {
			styleOverrides: {
				root: {
					transform: "unset",
				},
			},
		},
	},
});

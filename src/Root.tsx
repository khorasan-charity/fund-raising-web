import "./App.css";
import { AppHeader, Rtl, Theme, Toast } from "./ui/components";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./ui/theme";
import { Outlet, ScrollRestoration } from "react-router-dom";

function Root() {
	return (
		<Rtl>
			<Theme theme={theme}>
				<ScrollRestoration
					getKey={location => {
						return location.pathname;
					}}
				/>
				<CssBaseline />
				<Toast />
				<AppHeader />
				<Outlet />
			</Theme>
		</Rtl>
	);
}

export default Root;

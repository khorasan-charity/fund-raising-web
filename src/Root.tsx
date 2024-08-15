import "./App.css";
import { Home } from "./ui/views";
import { AppHeader, Rtl, Theme } from "./ui/components";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./ui/theme";

function Root() {
	return (
		<Rtl>
			<Theme theme={theme}>
				<CssBaseline />
				<AppHeader />
				<Home />
			</Theme>
		</Rtl>
	);
}

export default Root;

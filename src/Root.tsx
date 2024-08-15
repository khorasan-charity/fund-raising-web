import "./App.css";
import { Home } from "./ui/views";
import { AppHeader, Rtl, Theme } from "./ui/components";
import { theme } from "./ui/theme";

function Root() {
	return (
		<Rtl>
			<Theme theme={theme}>
				<AppHeader />
				<Home />
			</Theme>
		</Rtl>
	);
}

export default Root;

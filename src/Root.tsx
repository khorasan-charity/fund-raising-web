import "./App.css";
import { Home } from "./ui/views";
import { AppHeader, Rtl, Theme, Toast } from "./ui/components";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { theme } from "./ui/theme";
import { useEffect, useState } from "react";
import { delay } from "./app/utils";
import { SplashScreen } from "./ui/components/splash-screen/SplashScreen";

function Root() {
	const [loading, setLoading] = useState(true);

	const loadApp = async () => {
		await delay(2000);
		setLoading(false);
	};

	useEffect(() => {
		loadApp();
	}, []);

	return (
		<Rtl>
			<Theme theme={theme}>
				<CssBaseline />
				{!loading ? (
					<>
						<Toast />
						<AppHeader />
						<Container>
							<Home />
						</Container>
					</>
				) : (
					<SplashScreen />
				)}
			</Theme>
		</Rtl>
	);
}

export default Root;

import "./App.css";
import { AppHeader, Rtl, Theme, Toast } from "./ui/components";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./ui/theme";
import { useEffect, useState } from "react";
import { delay } from "./app/utils";
import { SplashScreen } from "./ui/components/splash-screen/SplashScreen";
import { Outlet, ScrollRestoration } from "react-router-dom";

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
				<ScrollRestoration
					getKey={location => {
						return location.pathname;
					}}
				/>
				<CssBaseline />
				{!loading ? (
					<>
						<Toast />
						<AppHeader />
						<Outlet />
					</>
				) : (
					<SplashScreen />
				)}
			</Theme>
		</Rtl>
	);
}

export default Root;

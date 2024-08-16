import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { fa } from "@/ui/i18n";

export const SplashScreen = () => {
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			height="100vh"
			sx={{ bgcolor: "primary.main" }}
		>
			<CircularProgress color="inherit" />
			<Typography
				mt={3}
				fontSize={{ lg: 24 }}
			>
				{fa.splash_screen.loading_msg}
			</Typography>
		</Stack>
	);
};

import useMediaQuery from "@mui/material/useMediaQuery";
import type { ThemeOptions } from "@mui/material/styles/createTheme";

export const useIsDesktop = () => {
	return useMediaQuery<ThemeOptions>(
		theme => theme.breakpoints?.up?.("lg")!,
	);
};

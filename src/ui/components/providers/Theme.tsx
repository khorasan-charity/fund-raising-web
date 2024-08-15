import { ThemeProvider, Theme as TTheme } from "@mui/material/styles";
import { PropsWithChildren } from "react";

export const Theme = ({
	children,
	theme,
}: PropsWithChildren<{ theme: TTheme }>) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

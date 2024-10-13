import Box, { type BoxProps } from "@mui/material/Box";
import { orange } from "@mui/material/colors";

interface AlertProps extends BoxProps {}

export default function WarningAlertBox({
	children,
	sx,
	...restProps
}: AlertProps) {
	return (
		<Box
			sx={{ backgroundColor: orange["100"], ...sx }}
			{...restProps}
		>
			{children}
		</Box>
	);
}

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material";

export const Donate = () => {
	return (
		<Box
			m={2}
			px={3}
			py={2}
			borderRadius={2}
			border={2}
			borderColor={theme => theme.palette.primary.main}
			bgcolor={theme => alpha(theme.palette.primary.main, 0.2)}
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Box>
				<Typography variant="h6">
					کمک هزینه تامین اقلام دارویی
				</Typography>
			</Box>
			<Box
				mt={2}
				width="100%"
			>
				<TextField
					fullWidth
					label="مبلغ"
					variant="outlined"
					type="number"
				/>

				<Button
					fullWidth
					sx={{ mt: 1 }}
				>
					پرداخت
				</Button>
			</Box>
		</Box>
	);
};

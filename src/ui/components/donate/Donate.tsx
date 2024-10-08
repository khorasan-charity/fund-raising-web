import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material";
import { useState } from "react";
import { fa } from "@/ui/i18n";
import { PriceInput } from "../common/price/PriceInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { delay } from "@/app/lib";

interface DonateProps {
	min?: number;

	// methods
	onPurchase: (value: number) => void;
}

export const Donate = ({ min = 0, onPurchase }: DonateProps) => {
	const [donate, setDonate] = useState(min);
	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(false);

	const onClick = async () => {
		setLoading(true);
		await delay(500);
		onPurchase(donate);
		setLoading(false);
	};

	return (
		<Box
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
				<Typography variant="h6">{fa.donate.title}</Typography>
			</Box>
			<Box
				mt={2}
				width="100%"
			>
				<PriceInput
					fullWidth
					type="number"
					helperText={hasError ? fa.common.price.errorMsg : null}
					label={fa.donate.inputLbl}
					error={hasError}
					value={donate}
					onChange={v => {
						setDonate(v);
						setHasError(!v || v < min);
					}}
				/>

				<LoadingButton
					fullWidth
					sx={{ mt: 1 }}
					disabled={hasError}
					loading={loading}
					onClick={onClick}
					variant="contained"
				>
					{fa.donate.purchase}
				</LoadingButton>
			</Box>
		</Box>
	);
};

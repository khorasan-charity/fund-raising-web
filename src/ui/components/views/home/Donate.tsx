import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LoadingButton } from "../../common";
import { PriceInput } from "../../common/price/PriceInput";
import { alpha } from "@mui/material";
import { useState } from "react";
import { fa } from "@/ui/i18n";

const MIN_PRICE = 100000;

export const Donate = () => {
	const [donate, setDonate] = useState(MIN_PRICE);
	const [hasError, setHasError] = useState(false);

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
				<Typography variant="h6">{fa.donate.title}</Typography>
			</Box>
			<Box
				mt={2}
				width="100%"
			>
				<PriceInput
					fullWidth
					helperText={hasError ? fa.common.price.errorMsg : null}
					label={fa.donate.inputLbl}
					error={hasError}
					type="number"
					value={donate}
					onChange={v => {
						setDonate(v);
						setHasError(!!!v || v < MIN_PRICE);
					}}
				/>

				<LoadingButton
					fullWidth
					sx={{ mt: 1 }}
					disabled={hasError}
				>
					پرداخت
				</LoadingButton>
			</Box>
		</Box>
	);
};

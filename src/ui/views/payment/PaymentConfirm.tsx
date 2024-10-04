import Container from "@mui/material/Container";
import useSearchParams from "@/app/hooks/use-search-params";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";

function InfoItem({ label, value }: { label: string; value: string }) {
	return (
		<Typography
			mt={1}
			fontSize={{ xs: 18, lg: 24 }}
		>
			<Box component="span">{label}:</Box>
			<Box
				component="span"
				fontWeight="bold"
				ml={1}
			>
				{value}
			</Box>
		</Typography>
	);
}

export default function PaymentConfirm() {
	const params = useSearchParams();
	const trackingCode = params.getParam("trackingCode");
	const amount = params.getParam("amount");
	const success = Boolean(
		params.getParam("success")?.toLowerCase() === "true",
	);

	const imgStyles: SxProps = {
		width: { xs: 100, lg: 250 },
		height: { xs: 100, lg: 250 },
	};

	const img = success ? (
		<TaskAltIcon
			color="success"
			sx={imgStyles}
		/>
	) : (
		<HighlightOffIcon
			color="error"
			sx={imgStyles}
		/>
	);
	let msg = "";

	if (success) {
		msg = "پرداخت شما با موفقیت انجام شد.";
	} else {
		msg = "پرداخت شما با شکست مواجه شد.";
	}

	return (
		<Container sx={{ mt: 10 }}>
			<Stack
				alignItems="center"
				justifyContent="center"
				height="100%"
			>
				{img}
				<Box
					my={2}
					textAlign="center"
				>
					<Typography
						fontSize={{ xs: 18, lg: 24 }}
						lineHeight={2}
					>
						همراه گرامی {msg}
					</Typography>
					{!success && (
						<Typography variant="body2">
							مبلغ کسر شده از حساب حداکثر تا ۷۲ ساعت آینده به
							حساب شما باز خواهد گشت.
						</Typography>
					)}
				</Box>
				<Box>
					{trackingCode && (
						<InfoItem
							label="کد پیگیری"
							value={trackingCode}
						/>
					)}
					{amount && (
						<InfoItem
							label="مبلغ"
							value={amount + " ریال"}
						/>
					)}
				</Box>
			</Stack>
		</Container>
	);
}

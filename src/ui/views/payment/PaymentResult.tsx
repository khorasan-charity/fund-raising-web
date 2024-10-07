import Container from "@mui/material/Container";
import useSearchParams from "@/app/hooks/use-search-params";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress, SxProps } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "@/router/routes";
import { useEffect, useState } from "react";
import getDonation from "@/app/api/endpoints/donation/get-donation";
import { IDonationPaymentResult } from "@/domain/campaign/IDonationItem";
import { Nullable } from "@/types";
import { split, toman } from "@/app/lib/price";

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
	const donationId = params.getParam("donationId");
	const [state, _setState] = useState<{
		loading: boolean;
		error: boolean;
		data: Nullable<IDonationPaymentResult>;
	}>({
		loading: true,
		error: false,
		data: null,
	});

	const imgStyles: SxProps = {
		width: { xs: 100, lg: 250 },
		height: { xs: 100, lg: 250 },
	};

	function setState(value: Partial<typeof state>) {
		_setState(old => ({ ...old, ...value }));
	}

	async function getPaymentInfo() {
		if (!donationId) return;
		try {
			const result = await getDonation(donationId);
			setState({
				loading: false,
				data: result,
				error: false,
			});
		} catch (_) {
			setState({
				loading: false,
				error: true,
			});
		}
	}

	useEffect(() => {
		if (!donationId) {
			setState({ loading: false, error: true });
			return;
		}

		getPaymentInfo();
	}, [donationId]);

	const fontSize = { xs: 18, lg: 24 };
	const success = !state.error && state.data?.payment.isPaid;
	const msg = state.error
		? "خطا در برقراری ارتباط با سامانه"
		: success
			? "پرداخت شما با موفقیت انجام شد."
			: "در پرداخت شما مشکلی بوجود آمده است.";
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

	return (
		<Container sx={{ mt: 10 }}>
			<Stack
				alignItems="center"
				justifyContent="center"
				height="100%"
			>
				{state.loading ? (
					<>
						<CircularProgress
							size={50}
							color="secondary"
						/>
						<Typography
							mt={3}
							fontSize={fontSize}
						>
							در حال دریافت اطلاعات
						</Typography>
					</>
				) : state.error ? (
					<>
						{img}
						<Typography
							mt={3}
							fontSize={fontSize}
						>
							خطا در برقراری ارتباط با سامانه
						</Typography>
					</>
				) : (
					<>
						{img}
						<Box
							my={2}
							textAlign="center"
						>
							<Typography
								fontSize={fontSize}
								lineHeight={2}
							>
								همراه گرامی {msg}
							</Typography>
							{!success && (
								<Typography variant="body2">
									مبلغ کسر شده از حساب حداکثر تا ۷۲ ساعت
									آینده به حساب شما باز خواهد گشت.
								</Typography>
							)}
						</Box>
						<Box>
							{state.data?.payment.trackingNumber && (
								<InfoItem
									label="کد پیگیری"
									value={String(
										state.data.payment.trackingNumber,
									)}
								/>
							)}
							{state.data?.amount && (
								<InfoItem
									label="مبلغ"
									value={
										split(toman(state.data.amount)) +
										" تومان"
									}
								/>
							)}
						</Box>

						<Link
							to={`${routes.campaignDetails.replace(":campaignId", String(state.data!.campaignId))}`}
						>
							<Button
								color="secondary"
								sx={{ mt: 4 }}
							>
								بازگشت به صفحه کمپین
							</Button>
						</Link>
					</>
				)}
			</Stack>
		</Container>
	);
}

import useSearchParams from "@/app/hooks/use-search-params";
import useCampaignDetails from "@/app/services/use-campaign-details";
import { searchParams } from "@/router/search-params";
import { PriceInput } from "@/ui/components/common/price/PriceInput";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { fa } from "@/ui/i18n";
import { LoadingButton } from "@mui/lab";
import { Container, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { apiBaseUrl } from "@/app/lib/env";

export default function Payment() {
	const url = apiBaseUrl + "/payment";
	const { getParam } = useSearchParams();
	const campaignId = getParam(searchParams.campaignId);
	const { data, isPending, isError } = useCampaignDetails(
		Number(campaignId),
	);
	const [state, setState] = useState({
		amount: 100_000,
		message: "",
		fullName: "",
		description: "",
		phoneNumber: "",
	});

	function onFieldChange<
		K extends keyof typeof state,
		V extends (typeof state)[K],
	>(key: K, value: V) {
		setState(old => ({
			...old,
			[key]: value,
		}));
	}

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		const form = new FormData(e.currentTarget);
		const price = form.get("amount");

		if (isPending) {
			e.preventDefault();
			return;
		}

		if (!price) {
			e.preventDefault();
			toast.error("ورود مبلغ الزامی است");
			return;
		}
	}

	if (!campaignId || isError) return <div>Something went wrong...</div>;

	return (
		<>
			<Container>
				{isPending ? (
					<Box
						textAlign="center"
						mt={4}
					>
						<CircularProgress
							color="secondary"
							size={32}
						/>
					</Box>
				) : (
					<Typography
						fontSize={18}
						textAlign="center"
						mt={4}
					>
						کمک به{" "}
						<Typography
							component="span"
							fontWeight="bold"
							fontStyle="italic"
							fontSize={18}
						>
							{data.title}
						</Typography>{" "}
					</Typography>
				)}
				<form
					action={url}
					method="POST"
					onSubmit={onSubmit}
				>
					<Stack
						py={2}
						maxWidth="sm"
						marginInline={{ sm: "auto" }}
					>
						<input
							type="text"
							name="campaignId"
							value={campaignId}
							hidden
						/>
						<PriceInput
							label={fa.donate.inputLbl}
							color="secondary"
							name="amount"
							sx={{ mt: 2 }}
							value={state.amount}
							onChange={val => onFieldChange("amount", val)}
						/>
						<TextField
							color="secondary"
							sx={{ mt: 2 }}
							name="name"
							label="نام و نام خانوادگی"
							value={state.fullName}
							onChange={e =>
								onFieldChange("fullName", e.target.value)
							}
						/>
						<TextField
							color="secondary"
							sx={{
								mt: 2,
								"input[type='number']::-webkit-inner-spin-button":
									{
										opacity: 0,
									},
							}}
							label="شماره موبایل"
							name="phone"
							type="number"
							value={state.phoneNumber}
							onChange={e =>
								onFieldChange(
									"phoneNumber",
									e.target.value.toString(),
								)
							}
							inputProps={{
								min: 0,
								dir: "ltr",
							}}
						/>
						<TextField
							color="secondary"
							sx={{ mt: 2 }}
							label="پیغام"
							name="message"
							value={state.message}
							onChange={e =>
								onFieldChange("message", e.target.value)
							}
						/>
						<TextField
							color="secondary"
							sx={{ mt: 2 }}
							label="توضیحات"
							minRows={5}
							multiline
							value={state.description}
							name="description"
							onChange={e =>
								onFieldChange(
									"description",
									e.target.value,
								)
							}
						/>
						<LoadingButton
							color="secondary"
							variant="contained"
							type="submit"
							sx={{ mt: 4, fontSize: 18 }}
							disabled={isPending}
						>
							پرداخت
						</LoadingButton>
					</Stack>
				</form>
			</Container>
		</>
	);
}

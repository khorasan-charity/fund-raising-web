import useSearchParams from "@/app/hooks/use-search-params";
import { searchParams } from "@/router/search-params";
import { PriceInput } from "@/ui/components/common/price/PriceInput";
import { fa } from "@/ui/i18n";
import { LoadingButton } from "@mui/lab";
import { Container, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Payment() {
	const { getParam } = useSearchParams();
	const campaignId = getParam(searchParams.campaignId);
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
		const price = form.get("price");
		if (!price) {
			e.preventDefault();
			toast.error("ورود مبلغ الزامی است");
			return;
		}
	}

	if (!campaignId) return <div>Something went wrong...</div>;

	return (
		<Container>
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
					کمپین تهیه دارو (دکتر سارا ابراهیمی)
				</Typography>{" "}
			</Typography>
			<form
				action=""
				target="_blank"
				onSubmit={onSubmit}
			>
				<Stack
					py={2}
					maxWidth="sm"
					marginInline={{ sm: "auto" }}
				>
					<input
						type="text"
						name="campaign"
						value={campaignId}
						hidden
					/>
					<PriceInput
						label={fa.donate.inputLbl}
						color="secondary"
						name="price"
						sx={{ mt: 2 }}
						value={state.amount}
						onChange={val => onFieldChange("amount", val)}
					/>
					<TextField
						color="secondary"
						sx={{ mt: 2 }}
						name="fullname"
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
							onFieldChange("description", e.target.value)
						}
					/>
					<LoadingButton
						color="secondary"
						sx={{ mt: 4, fontSize: 18 }}
						variant="contained"
						type="submit"
					>
						پرداخت
					</LoadingButton>
				</Stack>
			</form>
		</Container>
	);
}

import useSearchParams from "@/app/hooks/use-get-search-param";
import { delay } from "@/app/utils";
import { searchParams } from "@/router/search-params";
import { PriceInput } from "@/ui/components/common/price/PriceInput";
import { fa } from "@/ui/i18n";
import { LoadingButton } from "@mui/lab";
import { Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Payment() {
	const navigate = useNavigate();
	const { getParam } = useSearchParams();
	const campaignId = getParam(searchParams.campaignId);
	const [state, setState] = useState({
		amount: 100_000,
		message: "",
		fullName: "",
		description: "",
	});
	const [isPaying, setIsPaying] = useState(false);

	function onFieldChange<
		K extends keyof typeof state,
		V extends (typeof state)[K],
	>(key: K, value: V) {
		setState(old => ({
			...old,
			[key]: value,
		}));
	}

	async function submitPayment() {
		if (!state.amount) {
			toast.error("وارد کردن مبلغ الزامیست");
			return;
		}

		setIsPaying(true);
		await delay(500);
		setIsPaying(false);
		toast.success("پرداخت با موفقیت انجام شد");
		navigate(-1);
	}

	if (!campaignId) return <div>Something went wrong...</div>;

	return (
		<Container>
			<Stack py={2}>
				<Typography>
					شما در حال کمک رسانی به{" "}
					<Typography
						component="span"
						fontWeight="bold"
						fontStyle="italic"
					>
						کمپین تهیه دارو بیاد سرکار خانم دکتر سارا ابراهیمی
					</Typography>{" "}
					هستید.
				</Typography>
				<PriceInput
					label={fa.donate.inputLbl}
					color="secondary"
					sx={{ mt: 4 }}
					value={state.amount}
					onChange={val => onFieldChange("amount", val)}
					required
				/>
				<TextField
					color="secondary"
					sx={{ mt: 2 }}
					label="نام و نام خانوادگی"
					value={state.fullName}
					onChange={e =>
						onFieldChange("fullName", e.target.value)
					}
				/>
				<TextField
					color="secondary"
					sx={{ mt: 2 }}
					label="پیغام"
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
					onChange={e =>
						onFieldChange("description", e.target.value)
					}
				/>
				<LoadingButton
					color="secondary"
					sx={{ mt: 4 }}
					onClick={submitPayment}
					loading={isPaying}
					variant="contained"
				>
					پرداخت
				</LoadingButton>
			</Stack>
		</Container>
	);
}

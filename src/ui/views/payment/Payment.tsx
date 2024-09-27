import useSearchParams from "@/app/hooks/use-get-search-param";
import { searchParams } from "@/router/search-params";
import { PriceInput } from "@/ui/components/common/price/PriceInput";
import { fa } from "@/ui/i18n";
import {
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Payment() {
	const { getParam } = useSearchParams();
	const campaignId = getParam(searchParams.campaignId);
	const [state, setState] = useState({
		amount: 0,
		message: "",
		fullName: "",
		description: "",
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

	function submitPayment() {
		if (!state.amount) {
			toast.error("وارد کردن مبلغ الزامیست");
			return;
		}
	}

	if (!campaignId) return <div>Something went wrong...</div>;

	return (
		<Container>
			<Stack mt={3}>
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
					sx={{ mt: 2 }}
					label="نام و نام خانوادگی"
					value={state.fullName}
					onChange={e =>
						onFieldChange("fullName", e.target.value)
					}
				/>
				<TextField
					sx={{ mt: 2 }}
					label="پیغام"
					value={state.message}
					onChange={e =>
						onFieldChange("message", e.target.value)
					}
				/>
				<TextField
					sx={{ mt: 2 }}
					label="توضیحات"
					minRows={5}
					multiline
					value={state.description}
					onChange={e =>
						onFieldChange("description", e.target.value)
					}
				/>
				<Button
					sx={{ mt: 4 }}
					onClick={submitPayment}
				>
					پرداخت
				</Button>
			</Stack>
		</Container>
	);
}

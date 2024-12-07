import { split } from "@/app/lib/price";
import { fa } from "@/ui/i18n";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import type { ChangeEvent } from "react";

type PriceProps = Omit<TextFieldProps, "onChange" | "value"> & {
	value: number;
	onChange: (val: number) => void;
};

const p2e = (s: string) =>
	s.replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));

export const PriceInput = ({ value, ...rest }: PriceProps) => {
	const { onChange } = rest;

	// const inTomanMsg = fa.common.price.toman;
	// const _toman = toman(value);
	// const int = Math.floor(_toman);
	// const helperText = value ? `${split(int)} ${inTomanMsg}` : null;

	const helperText = value ? `${split(value)} ${fa.common.price.rial}` : null;

	const onPriceChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { value } = e.target;

		const newValue = Math.abs(Number(p2e(value).replaceAll(".", "")));
		onChange(newValue);
	};

	return (
		<TextField
			{...rest}
			helperText={rest.helperText || helperText}
			FormHelperTextProps={{
				sx: {
					fontSize: 16,
					textAlign: "center",
				},
			}}
			value={value || ""}
			onChange={onPriceChange}
			inputProps={{
				min: 0,
				dir: "ltr",
			}}
			sx={{
				...rest.sx,
				"input[type='number']::-webkit-inner-spin-button": {
					opacity: 0,
				},
			}}
		/>
	);
};

import { split } from "@/app/utils/price";
import { fa } from "@/ui/i18n";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import type { ChangeEvent } from "react";

type PriceProps = Omit<TextFieldProps, "onChange" | "value"> & {
	value: number;
	onChange: (val: number) => void;
};

export const PriceInput = ({ value, ...rest }: PriceProps) => {
	const { onChange } = rest;

	const inTomanMsg = fa.common.price.toman;
	const helperText = value ? `${split(value)} ${inTomanMsg}` : null;

	const onPriceChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const newValue = Math.abs(
			Number(e.target.value.replaceAll(".", "")),
		);
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

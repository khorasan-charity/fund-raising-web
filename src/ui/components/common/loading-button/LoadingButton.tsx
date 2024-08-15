import Button, {
	type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface ButtonProps extends MuiButtonProps {
	loading?: boolean;
}

export const LoadingButton = ({
	children,
	loading,
	...rest
}: ButtonProps) => {
	return (
		<Button
			{...rest}
			disabled={rest.disabled || loading}
		>
			{loading && (
				<CircularProgress
					sx={{ color: "inherit", marginInlineEnd: 1 }}
					size={18}
				/>
			)}
			{children}
		</Button>
	);
};

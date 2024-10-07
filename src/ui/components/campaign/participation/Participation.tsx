import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface IParticipationProps {
	percent: number;
	size?: number;
	fontSize?: number;
	percentFontSize?: number;
	color?: "secondary" | "success";
}

const Circle = styled(Box)<{ size: number }>`
	display: inline-block;
	vertical-align: middle;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	border-radius: 50%;
	text-align: center;
	line-height: ${props => props.size}px;
	overflow: hidden;
	position: relative;
	box-sizing: border-box;
`;

const Fill = styled(Box)<{ height: number }>`
	height: ${props => props.height}%;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
`;

export default function Participation({
	percent,
	size = 73,
	fontSize = 18,
	percentFontSize = 16,
	color = "secondary",
}: IParticipationProps) {
	const isSecondary = color === "secondary";

	const colors = {
		borderColor: isSecondary ? "secondary.main" : "success.main",
		bgColor: isSecondary ? "secondary.800" : "success.dark",
		fillBgColor: isSecondary ? "secondary.200" : "success.light",
	};

	return (
		<Circle
			size={size}
			border={`${size / 15}px solid`}
			borderColor={colors.borderColor}
			bgcolor={colors.bgColor}
		>
			<Typography
				component="span"
				color="white"
				fontSize={fontSize}
				position="absolute"
				top="50%"
				left="50%"
				sx={{ transform: "translateY(-50%) translateX(-50%)" }}
				zIndex={2}
			>
				<Typography
					component="span"
					fontFamily="sans-serif"
					ml={"1px"}
					fontSize={percentFontSize}
				>
					%
				</Typography>
				{percent}
			</Typography>
			<Fill
				height={percent}
				bgcolor={colors.fillBgColor}
			/>
		</Circle>
	);
}

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface IParticipationProps {
	percent: number;
	size?: number;
	fontSize?: number;
	percentFontSize?: number;
}

const Circle = styled(Box)<{ $size: number }>`
	display: inline-block;
	vertical-align: middle;
	width: ${props => props.$size}px;
	height: ${props => props.$size}px;
	border-radius: 50%;
	text-align: center;
	line-height: ${props => props.$size}px;
	overflow: hidden;
	position: relative;
	box-sizing: border-box;
`;

const Fill = styled(Box)<{ $height: number }>`
	height: ${props => props.$height}%;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
`;

export default function Participation({
	percent,
	size = 73,
	fontSize = 22,
	percentFontSize = 16,
}: IParticipationProps) {
	return (
		<Circle
			$size={size}
			border="3px solid"
			borderColor="secondary.main"
			bgcolor="secondary.800"
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
				$height={percent}
				bgcolor="secondary.200"
			/>
		</Circle>
	);
}

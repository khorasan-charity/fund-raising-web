import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

import child from "@/assets/images/child.png";

const Child = styled.img`
	max-width: 774px;
	max-height: 408px;
	height: 100%;
	flex: 1;
`;

export default function HomeBanner() {
	return (
		<Box
			p={"24px"}
			bgcolor="primary.main"
		>
			<Container>
				<Stack
					flexDirection="row"
					alignItems="center"
					gap={10}
				>
					<Typography
						flex={1}
						textAlign="center"
						fontSize={32}
					>
						<Typography
							component="span"
							fontSize={32}
							lineHeight={2}
						>
							با کمک شما تا کنون
						</Typography>
						<br />
						<Typography
							component="span"
							fontSize={32}
							lineHeight={2}
							fontWeight="bold"
							color="secondary"
						>
							4200 کودک
						</Typography>
						<br />
						<Typography
							component="span"
							fontSize={32}
							lineHeight={2}
						>
							تحت حمایت موسسه قرار گرفته‌اند.
						</Typography>
					</Typography>
					<Child src={child} />
				</Stack>
			</Container>
		</Box>
	);
}

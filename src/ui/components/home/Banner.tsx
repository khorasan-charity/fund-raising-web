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
	width: 100%;
	flex: 1;
`;

export default function HomeBanner() {
	const fontSizeLarge = { xs: 26, lg: 32, xl: 36 };
	const fontSizeNormal = { xs: 20, lg: 26, xl: 30 };
	const fontSizeSmall = { xs: 12, lg: 18, xl: 22 };

	return (
		<Box
			p={"24px"}
			bgcolor="primary.main"
		>
			<Container>
				<Stack
					flexDirection={{ xs: "column", xl: "row" }}
					alignItems="center"
					gap={{ xs: 2, xl: 10 }}
				>
					<Typography
						flex={1}
						textAlign="center"
					>
						<Typography
							component="span"
							fontSize={fontSizeNormal}
							lineHeight={2}
						>
							با کمک
							<Typography
								component="span"
								fontSize={fontSizeLarge}
								lineHeight={2}
								fontWeight="bold"
								color="secondary"
							>
								&nbsp;۴۵۹&nbsp;
							</Typography>
							حامی
						</Typography>
						<br />
						<Typography
							component="span"
							fontSize={fontSizeNormal}
							lineHeight={2}
						>
							مبلغ
							<Typography
								component="span"
								fontSize={fontSizeLarge}
								lineHeight={2}
								fontWeight="bold"
								color="secondary"
							>
								&nbsp;۵۹۰٫۰۰۰٫۰۰۰&nbsp;
								<Typography
									component="span"
									fontSize={fontSizeSmall}
									fontWeight="bold"
									color="secondary"
								>
									تومان&nbsp;
								</Typography>
							</Typography>
						</Typography>
						<br />
						<Typography
							component="span"
							fontSize={fontSizeNormal}
							lineHeight={2}
						>
							جمع‌آوری شده است.
						</Typography>
					</Typography>
					<Child src={child} />
				</Stack>
			</Container>
		</Box>
	);
}

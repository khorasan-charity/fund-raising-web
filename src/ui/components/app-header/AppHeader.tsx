import { fa } from "../../i18n";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

import logo from "@/assets/images/logo.png";

const Logo = styled.img`
	width: 48px;
	height: 48px;
`;

function AuthButton({ children }: PropsWithChildren) {
	return (
		<Button
			variant="text"
			color="inherit"
		>
			{children}
		</Button>
	);
}

export function AppHeader() {
	return (
		<AppBar
			position="sticky"
			elevation={0}
			color="default"
		>
			<Container>
				<Toolbar
					sx={{
						py: 2,
						height: 80,
						"&.MuiToolbar-root": { px: 0 },
					}}
				>
					<Stack
						sx={{ flexGrow: 1 }}
						flexDirection="row"
						alignItems="center"
					>
						<Logo src={logo} />
						<Typography
							component="h1"
							ml={2}
							fontSize={24}
							display={{ xs: "none", xl: "block" }}
						>
							{fa.app_header.title}
						</Typography>
					</Stack>
					<AuthButton>{fa.app_header.register}</AuthButton>
					<AuthButton>{fa.app_header.login}</AuthButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

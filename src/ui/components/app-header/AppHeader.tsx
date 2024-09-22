import { fa } from "../../i18n";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import logo from "@/assets/logo.png";
import { PropsWithChildren } from "react";

const Logo = styled.img`
	width: 64px;
	height: 64px;
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
				<Toolbar sx={{ py: 2 }}>
					<Logo src={logo} />
					<Typography
						component="h1"
						sx={{ flexGrow: 1 }}
						ml={2}
						fontSize={28}
					>
						{fa.app_header.title}
					</Typography>
					<AuthButton>{fa.app_header.register}</AuthButton>
					<AuthButton>{fa.app_header.login}</AuthButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

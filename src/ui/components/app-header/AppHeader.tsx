import { fa } from "../../i18n";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

export function AppHeader() {
	return (
		<AppBar
			position="static"
			elevation={0}
		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					{fa.app_header.title}
				</Typography>
				<Button color="inherit">{fa.app_header.login}</Button>
			</Toolbar>
		</AppBar>
	);
}

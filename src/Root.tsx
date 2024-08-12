import { ThemeProvider } from "react-bootstrap";
import "./App.css";
import { Home } from "./ui/views";
import { AppHeader } from "./ui/components";

function App() {
	return (
		<ThemeProvider dir="rtl">
			<AppHeader />
			<Home />
		</ThemeProvider>
	);
}

export default App;

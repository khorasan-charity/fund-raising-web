import { ThemeProvider } from "react-bootstrap";
import "./App.css";
import { Home } from "./ui/views";

function App() {
	return (
		<ThemeProvider dir="rtl">
			<div className="App">
				<h3>Hello World</h3>
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;

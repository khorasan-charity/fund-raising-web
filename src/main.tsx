import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
);

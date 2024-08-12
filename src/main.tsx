import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";

import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
);

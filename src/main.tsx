import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import QueryClientProvider from "./ui/components/providers/QueryClientProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>,
);

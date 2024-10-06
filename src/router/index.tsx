import Root from "@/Root";
import { lazy, LazyExoticComponent, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { routes } from "./routes";

const Home = lazy(() => import("@/ui/views/home/Home"));
const CampaignDetails = lazy(
	() => import("@/ui/views/campaign/CampaignDetails"),
);
const Payment = lazy(() => import("@/ui/views/payment/Payment"));

const PaymentConfirm = lazy(
	() => import("@/ui/views/payment/PaymentResult"),
);

const lazyPage = (Page: LazyExoticComponent<() => JSX.Element>) => (
	<Suspense fallback={<></>}>
		<Page />
	</Suspense>
);

export const router = createHashRouter([
	{
		path: routes.home,
		element: <Root />,
		children: [
			{
				index: true,
				element: lazyPage(Home),
			},
			{
				path: routes.campaignDetails,
				element: lazyPage(CampaignDetails),
			},
			{
				path: routes.payment,
				element: lazyPage(Payment),
			},
			{
				path: routes.paymentResult,
				element: lazyPage(PaymentConfirm),
			},
		],
	},
]);

import { useIsDesktop } from "@/app/hooks";
import { ToastContainer, type ToastPosition } from "react-toastify";

export const Toast = () => {
	const isDesktop = useIsDesktop();
	const position: ToastPosition = isDesktop
		? "bottom-left"
		: "top-center";

	return (
		<ToastContainer
			theme="colored"
			position={position}
			bodyStyle={{ fontFamily: "Vazirmatn" }}
			toastStyle={{ margin: !isDesktop ? 8 : 0 }}
			closeButton={false}
			rtl
		/>
	);
};

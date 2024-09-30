import queryClient from "@/app/lib/query-client";
import { QueryClientProvider as TanstackQueryClientprovider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function QueryClientProvider({
	children,
}: PropsWithChildren) {
	return (
		<TanstackQueryClientprovider client={queryClient}>
			{children}
		</TanstackQueryClientprovider>
	);
}

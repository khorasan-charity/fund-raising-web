import { apiBaseUrl } from "@/app/lib/env";

export default function createClient() {
	const defaultHeaders = {
		["Content-Type"]: "application/json",
	};

	return {
		async fetch(url: string, { headers, ...restInit }: RequestInit) {
			return fetch(apiBaseUrl + url, {
				headers: {
					...defaultHeaders,
					...headers,
				},
				...restInit,
			});
		},
	};
}

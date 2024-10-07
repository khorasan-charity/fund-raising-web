import { useQuery } from "@tanstack/react-query";
import getDonationCount from "../api/endpoints/donation/get-count";

export const donationCountOptions = {
	queryKey: ["donation-count"],
	queryFn: getDonationCount,
};

export default function useDonationCount() {
	return useQuery(donationCountOptions);
}

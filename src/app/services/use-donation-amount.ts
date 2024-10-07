import { useQuery } from "@tanstack/react-query";
import getDonationAmount from "../api/endpoints/donation/get-amount";

export const donationAmountOptions = {
	queryKey: ["donation-amount"],
	queryFn: getDonationAmount,
};

export default function useDonationAmount() {
	return useQuery(donationAmountOptions);
}

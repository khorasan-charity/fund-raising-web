import { useQueries } from "@tanstack/react-query";
import { donationCountOptions } from "./use-donation-count";
import { donationAmountOptions } from "./use-donation-amount";

export default function useHomeDonation() {
	return useQueries({
		queries: [donationCountOptions, donationAmountOptions],
	});
}

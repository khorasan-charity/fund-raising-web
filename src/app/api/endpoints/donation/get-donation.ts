import { IDonationPaymentResult } from "@/domain/campaign/IDonationItem";
import request from "../../base/request";

export default function getDonation(
	donationId: string,
): Promise<IDonationPaymentResult> {
	return request.get(`/donation/${donationId}`);
}

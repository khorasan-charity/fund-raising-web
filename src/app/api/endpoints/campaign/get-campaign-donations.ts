import { IPaginatedResult } from "@/domain/api/IPaginatedResult";
import request from "../../base/request";
import { IDonationItem } from "@/domain/campaign/IDonationItem";

export default function getCampaignDonations(
	campaignId: number,
): Promise<IPaginatedResult<IDonationItem>> {
	return request.get(`/campaign/${campaignId}/donations`);
}

import { ICampaignItem } from "@/domain/campaign/IcampaignItem";
import request from "../../base/request";

export default function getCampaignItems(
	campaignId: number,
): Promise<ICampaignItem[]> {
	return request.get(`/campaign/${campaignId}/items`);
}

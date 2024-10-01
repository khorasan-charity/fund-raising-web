import { ICampaignItem } from "@/domain/campaign/ICampaignItem";
import request from "../../base/request";

export default function getCampaignItems(
	campaignId: number,
): Promise<ICampaignItem[]> {
	return request.get(`/campaign/${campaignId}/items`);
}

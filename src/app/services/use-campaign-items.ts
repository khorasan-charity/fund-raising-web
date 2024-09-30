import { useQuery } from "@tanstack/react-query";
import getCampaignItems from "../api/endpoints/campaign/get-campaign-items";

export default function useCampaignItems(campaignId: number) {
	return useQuery({
		queryKey: [`campaign-items-${campaignId}`],
		queryFn: () => getCampaignItems(campaignId),
	});
}

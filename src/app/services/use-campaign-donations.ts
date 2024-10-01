import { useQuery } from "@tanstack/react-query";
import getCampaignDonations from "../api/endpoints/campaign/get-campaign-donations";

export default function useCampaignDonations(campaignId: number) {
	return useQuery({
		queryKey: [`campaign-donations-${campaignId}`],
		queryFn: () => getCampaignDonations(campaignId),
	});
}

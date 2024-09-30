import { useQuery } from "@tanstack/react-query";
import getCampaign from "../api/endpoints/campaign/get-campaign";

export default function useCampaignDetails(id: number) {
	return useQuery({
		queryKey: [`campaign-details-${id}`],
		queryFn: () => getCampaign(id),
	});
}

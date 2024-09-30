import { useQuery } from "@tanstack/react-query";
import getAllCampaigns from "../api/endpoints/campaign/get-all";

export default function useCampaignList() {
	return useQuery({
		queryKey: ["campaign-list"],
		queryFn: getAllCampaigns,
	});
}

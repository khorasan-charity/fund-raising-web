import { ICampaign } from "@/domain/campaign/ICampaign";
import request from "../../base/request";

export default function getCampaign(id: number): Promise<ICampaign> {
	return request.get(`/campaign/${id}`);
}

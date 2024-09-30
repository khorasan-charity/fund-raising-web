import { IPaginatedResult } from "@/domain/api/IPaginatedResult";
import request from "../../base/request";
import { ICampaign } from "@/domain/campaign/ICampaign";

export default async function getAllCampaigns(): Promise<
	IPaginatedResult<ICampaign>
> {
	return request.get("/campaign");
}

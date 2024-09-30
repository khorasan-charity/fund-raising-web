import { Nullable } from "@/types";

export interface ICampaignItem {
	campaignId: number;
	title: string;
	imageFileId: string;
	description: Nullable<string>;
	targetAmount: number;
	raisedAmount: number;
	raisedCount: number;
	creationTime: string;
	lastModificationTime: Nullable<string>;
	id: number;
}

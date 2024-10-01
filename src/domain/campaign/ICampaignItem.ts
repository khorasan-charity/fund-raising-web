import { Nullable } from "@/types";

export interface ICampaignItemAttribute {
	title: string;
	value: string;
	valueType: string;
	valueTypeTitle: string;
	description: Nullable<string>;
	id: number;
}

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
	attributes: ICampaignItemAttribute[];
}

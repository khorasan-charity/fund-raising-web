import { Nullable } from "@/types";

export interface IDonationItem {
	campaignId: number;
	campaignItemId: Nullable<number>;
	amount: number;
	name: Nullable<string>;
	message: Nullable<string>;
	description: Nullable<string>;
	creatorId: Nullable<number>;
	creationTime: string;
	id: number;
}

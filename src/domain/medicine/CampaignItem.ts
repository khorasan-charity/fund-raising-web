import { Id, Nullable } from "@/types";

export interface CampaignItemDao {
	id: Id;
	title: string;
	total: number;
	unitPrice: number;
	paidAmount: number;
	imgUrl: string;
}

export interface ICampaignItem {
	id: Id;
	title: string;
	unit: number;
	imgUrl: Nullable<string>;
	total: number;
	paid: number;
	percent: number;
}

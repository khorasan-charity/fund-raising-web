import { Id, Nullable } from "@/types";

export interface ICampaign {
	id: Id;
	imgUrl: string;
	title: string;
	collected: number;
	peopleCount: number;
	percent: number;
}

export interface ICampaignDetails {
	id: Id;
	images: string[];
	title: string;
	description: string;
	peopleCount: number;
	percent: number;
	collected: number;
	total: number;
}

export interface ISupporterList {
	total: number;
	supporters: ISupporter[];
}

export interface ISupporter {
	title: string;
	amount: number;
	fancyTime: string;
	avatarUrl: Nullable<string>;
	msg: Nullable<string>;
}

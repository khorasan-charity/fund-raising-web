import { ID } from "@/types";

export interface ICampaign {
	id: ID;
	imgUrl: string;
	title: string;
	collected: number;
	peopleCount: number;
	percent: number;
}

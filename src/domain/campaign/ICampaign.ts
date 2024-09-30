import { Nullable } from "@/types";

export interface ICampaign {
	title: string;
	coverImageFileId: string;
	thumbnailImageFileId: Nullable<string>;
	description: string;
	startDateTime: Nullable<string>;
	endDateTime: Nullable<string>;
	targetAmount: number;
	raisedAmount: number;
	raiseCount: number;
	isVisible: boolean;
	isActive: boolean;
	creationTime: string;
	lastModificationTime: Nullable<string>;
	id: number;
}

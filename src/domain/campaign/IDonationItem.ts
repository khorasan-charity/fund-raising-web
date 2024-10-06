import { Nullable } from "@/types";
import { IPayment } from "../payment/IPayment";

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

export interface IDonationPaymentResult extends IDonationItem {
	payment: IPayment;
}

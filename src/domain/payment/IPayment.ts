import { Nullable } from "@/types";

export interface IPayment {
	trackingNumber: number;
	amount: number;
	token: Nullable<string>;
	transactionCode: Nullable<number>;
	isCompleted: boolean;
	isPaid: boolean;
	id: number;
}

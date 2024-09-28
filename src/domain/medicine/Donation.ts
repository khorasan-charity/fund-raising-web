import { Nullable } from "@/types";

export interface IDonation {
	id: number;
	name: string;
	message: Nullable<string>;
	amount: string;
	time: string;
}

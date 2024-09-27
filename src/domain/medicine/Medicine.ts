import { Id, Nullable } from "@/types";

export interface MedicineDao {
	id: Id;
	title: string;
	total: number;
	unitPrice: number;
	paidAmount: number;
	imgUrl: string;
}

export interface IMedicine {
	id: Id;
	title: string;
	unit: number;
	imgUrl: Nullable<string>;
	total: number;
	paid: number;
	percent: number;
}

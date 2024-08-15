import { ID } from "../Shared";

export interface MedicineDao {
	id: ID;
	title: string;
	total: number;
	unitPrice: number;
	paidAmount: number;
}

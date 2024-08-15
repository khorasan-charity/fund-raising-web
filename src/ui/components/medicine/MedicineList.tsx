import { MedicineDao } from "@/domain";
import Box from "@mui/material/Box";
import { MedicineItem } from "./MedicineItem";

interface MedicineListProps {
	data: Array<MedicineDao>;
}

export const MedicineList = ({ data }: MedicineListProps) => {
	return (
		<Box
			overflow="auto"
			maxHeight={500}
		>
			{data.map(medicine => (
				<MedicineItem
					key={medicine.id}
					{...medicine}
				/>
			))}
		</Box>
	);
};

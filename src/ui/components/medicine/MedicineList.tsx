import { MedicineDao } from "@/domain";
import Box from "@mui/material/Box";

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
				<li key={medicine.id}>{medicine.title}</li>
			))}
		</Box>
	);
};

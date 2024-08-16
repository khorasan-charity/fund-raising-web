import { MedicineDao } from "@/domain";
import Grid from "@mui/material/Grid";
import { MedicineItem } from "./MedicineItem";

interface MedicineListProps {
	data: Array<MedicineDao>;
}

export const MedicineList = ({ data }: MedicineListProps) => {
	return (
		<Grid
			container
			spacing={2}
			overflow="auto"
			maxHeight={500}
			pb={2}
		>
			{data.map(medicine => (
				<Grid
					item
					xs={12}
					sm={6}
					xl={4}
					key={medicine.id}
				>
					<MedicineItem {...medicine} />
				</Grid>
			))}
		</Grid>
	);
};

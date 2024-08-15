import { fa } from "@/ui/i18n";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const MedicineList = () => {
	return (
		<>
			<Typography variant="h6">{fa.medicine_list.title}</Typography>
			<Box
				overflow="auto"
				maxHeight={500}
			>
				{Array.from({ length: 400 }).map((_, idx) => (
					<li key={idx}>{idx}</li>
				))}
			</Box>
		</>
	);
};

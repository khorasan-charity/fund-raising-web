import { IMedicine } from "@/domain";
import { Box, Grid, Typography } from "@mui/material";
import MedicineNeededCard from "./MedicineNeededCard";

interface IMedicinesNeededProps {
	medicines: IMedicine[];
}

export default function MedicinesNeeded({
	medicines,
}: IMedicinesNeededProps) {
	return (
		<Box mt={4}>
			<Typography
				component="h1"
				fontSize={32}
				fontWeight={700}
			>
				لیست داروهای مورد نیاز
			</Typography>
			<Grid
				container
				spacing={2}
				mt={4}
				mb={2}
			>
				{medicines.map(medicine => (
					<Grid
						item
						xs={12}
						md={12}
						xl={6}
						xxl={4}
						key={medicine.id}
					>
						<MedicineNeededCard medicine={medicine} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

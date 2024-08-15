import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Donate } from "@/ui/components/donate/Donate";
import { MedicineList } from "@/ui/components/medicine/MedicineList";

export function Home() {
	return (
		<Stack
			direction={{ lg: "row-reverse" }}
			my={2}
		>
			<Box>
				<Donate />
			</Box>
			<Box
				flex={1}
				mt={{ xs: 2, lg: 0 }}
			>
				<MedicineList />
			</Box>
		</Stack>
	);
}

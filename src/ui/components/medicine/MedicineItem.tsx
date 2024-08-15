import { MedicineDao } from "@/domain";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

export const MedicineItem = (props: MedicineDao) => {
	return (
		<Stack
			gap={2}
			mt={3}
		>
			<Stack
				direction="row"
				alignItems="center"
				gap={2}
			>
				<Avatar
					src={props.imgUrl}
					alt={props.title}
				/>
				<Typography>{props.title}</Typography>
			</Stack>
			<Stack></Stack>
		</Stack>
	);
};

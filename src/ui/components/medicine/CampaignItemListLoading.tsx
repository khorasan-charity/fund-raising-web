import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const CIRCLE_SIZE = 48;

export const CampaignItemListLoading = () => {
	return Array.from({ length: 5 }).map((_, idx) => (
		<Stack
			direction="row"
			gap={2}
			key={idx}
		>
			<Skeleton
				width={CIRCLE_SIZE}
				height={CIRCLE_SIZE}
				sx={{ borderRadius: "50%" }}
			/>
			<Skeleton sx={{ flex: 1 }} />
		</Stack>
	));
};

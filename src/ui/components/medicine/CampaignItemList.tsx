import { CampaignItemDao } from "@/domain";
import Grid from "@mui/material/Grid";
import { CampaignItem } from "./CampaignItem";

interface CampaignItemListProps {
	data: Array<CampaignItemDao>;
}

export const CampaignItemList = ({ data }: CampaignItemListProps) => {
	return (
		<Grid
			container
			spacing={2}
			overflow="auto"
			// maxHeight={500}
			pb={2}
		>
			{data.map(item => (
				<Grid
					item
					xs={12}
					sm={6}
					xl={4}
					key={item.id}
				>
					<CampaignItem {...item} />
				</Grid>
			))}
		</Grid>
	);
};

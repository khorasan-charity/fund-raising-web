import { IDonationItem } from "@/domain/campaign/IDonationItem";
import { fa } from "@/ui/i18n";
import Divider from "@mui/material/Divider/Divider";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import SupportItem from "./CampaignSupportItem";

interface ICampaignSupportsProps {
	donations: IDonationItem[];
	raiseCount: number;
}

export default function CampaignSupports({
	donations,
	raiseCount,
}: ICampaignSupportsProps) {
	return (
		<Stack
			height="370px"
			order={4}
			pb={2}
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				p={2}
			>
				<Typography
					fontSize={25}
					fontWeight={700}
				>
					{fa.common.supporters}
				</Typography>
				<Typography
					fontSize={25}
					fontWeight={700}
				>
					{raiseCount} {fa.common.count}
				</Typography>
			</Stack>
			<Stack
				flexGrow={1}
				overflow="auto"
				divider={
					<Divider
						orientation="horizontal"
						flexItem
					/>
				}
				spacing={2}
				p={2}
			>
				{donations.map(donation => (
					<SupportItem
						key={donation.id}
						donation={donation}
					/>
				))}
			</Stack>
		</Stack>
	);
}

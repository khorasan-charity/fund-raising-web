import toJalaliFormattedString from "@/app/lib/date";
import { split } from "@/app/lib/price";
import { IDonationItem } from "@/domain/campaign/IDonationItem";
import { fa } from "@/ui/i18n";
import Avatar from "@mui/material/Avatar/Avatar";
import deepPurple from "@mui/material/colors/deepPurple";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";

interface ISupportItemProps {
	donation: IDonationItem;
}

export default function SupportItem({ donation }: ISupportItemProps) {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
		>
			<Stack
				direction="row"
				alignItems="center"
			>
				<Avatar sx={{ bgcolor: deepPurple[200] }} />
				<Stack
					spacing={1}
					alignItems="start"
					justifyContent="space-around"
					height="100%"
					ml={1}
				>
					<Typography
						fontWeight="bold"
						fontSize={20}
					>
						{donation.name || fa.common.anonymous}
					</Typography>
					{donation.message && (
						<Typography
							fontSize={12}
							color="gray"
							maxWidth={150}
						>
							{donation.message}
						</Typography>
					)}
				</Stack>
			</Stack>
			<Stack
				spacing={1}
				alignItems="end"
				justifyContent="space-around"
			>
				<Typography
					color="secondary"
					fontWeight={700}
					fontSize={16}
					noWrap
				>
					{split(donation.amount)} {fa.common.price.rial}
				</Typography>
				<Typography
					fontSize={12}
					color="gray"
				>
					{toJalaliFormattedString(
						new Date(donation.creationTime),
					)}
				</Typography>
			</Stack>
		</Stack>
	);
}

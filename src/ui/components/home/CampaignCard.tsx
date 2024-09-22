import { ICampaign } from "@/domain/medicine/Campaign";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Participation from "../campaign/participation/Participation";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";

interface ICampaignCardProps {
	campaign: ICampaign;
}

const CampaignImg = styled.img`
	width: 100%;
`;

export default function CampaignCard({ campaign }: ICampaignCardProps) {
	const navigate = useNavigate();

	function onCardClick() {
		navigate(
			routes.campaignDetails.replace(
				":campaignId",
				String(campaign.id),
			),
		);
	}

	return (
		<Card
			sx={{ cursor: "pointer" }}
			elevation={4}
			onClick={onCardClick}
		>
			<CampaignImg src={campaign.imgUrl} />
			<Box
				px={2}
				mt={1}
			>
				<Typography
					component="h2"
					fontSize={18}
					fontWeight="bold"
				>
					{campaign.title}
				</Typography>
			</Box>
			<Box
				px={2}
				mt={3}
				pb={2}
			>
				<Participation percent={campaign.percent} />
				<Box
					display="inline-block"
					ml="10px"
					sx={{ verticalAlign: "middle" }}
				>
					<Typography
						fontWeight={700}
						fontSize={22}
						color="secondary"
					>
						{campaign.collected / 1e6} میلیون تومان
					</Typography>
					<Typography fontWeight={"bold"}>
						توسط {campaign.peopleCount} نفر جمع آوری شده است.
					</Typography>
				</Box>
			</Box>
		</Card>
	);
}

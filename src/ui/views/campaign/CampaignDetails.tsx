import styled from "@emotion/styled";
import getImageSource from "@/app/lib/get-image-source";
import getRaisedPercent from "@/app/lib/percent";
import useCampaignDetails from "@/app/services/use-campaign-details";
import useCampaignItems from "@/app/services/use-campaign-items";
import { routes } from "@/router/routes";
import { searchParams } from "@/router/search-params";
import CampaignItems from "@/ui/components/campaign/campaign-details/CampaignItems";
import Participation from "@/ui/components/campaign/participation/Participation";
import { fa } from "@/ui/i18n";
import { Link, useParams } from "react-router-dom";
import Container from "@mui/material/Container/Container";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import CampaignSupports from "@/ui/components/campaign/campaign-details/CampaignSupports";
import Card from "@mui/material/Card/Card";
import useCampaignDonations from "@/app/services/use-campaign-donations";

const Img = styled.img`
	width: 100%;
	max-height: 490px;
	height: 100%;
`;

const Analytics = styled(Card)`
	height: 490px;
	padding: 30px;
	text-align: center;
`;

export default function CampaignDetailsPage() {
	const { campaignId } = useParams();
	const { data, error } = useCampaignDetails(Number(campaignId));
	const { data: campaignItems, error: campaignItemsError } =
		useCampaignItems(Number(campaignId));
	const { data: campaignDonations, error: campaignDonationsError } =
		useCampaignDonations(Number(campaignId));

	if (error || !data) return <></>;

	return (
		<Container>
			<Stack
				direction={{ xs: "column", lg: "row" }}
				mt={1}
				gap={1}
			>
				<Stack
					flex={1}
					// 96px => app header, 8px => mt={1} upper stack
					height="calc(100vh - (96px + 8px))"
					overflow="auto"
					order={{ xs: 2, lg: 1 }}
					p={1}
				>
					<Img src={getImageSource(data.coverImageFileId)} />
					<Typography
						fontWeight={700}
						fontSize={32}
						my={3}
					>
						{data.title}
					</Typography>
					<Typography
						fontSize={18}
						lineHeight={"32px"}
						textAlign="justify"
						px={1}
					>
						{data.description}
					</Typography>

					{campaignItems && !campaignItemsError && (
						<CampaignItems items={campaignItems} />
					)}
				</Stack>
				<Stack
					width={{ xs: "100%", lg: 400 }}
					order={{ xs: 1, lg: 1 }}
					display={{ xs: "contents", lg: "flex" }}
				>
					<Analytics
						elevation={3}
						sx={{ mt: 1 }}
					>
						<Box mt={5.5}>
							<Participation
								size={133}
								percent={getRaisedPercent(
									data.targetAmount,
									data.raisedAmount,
								)}
								fontSize={48}
								percentFontSize={22}
							/>
						</Box>
						<Typography
							color="secondary.main"
							fontSize={32}
							fontWeight={700}
							mt="51px"
						>
							{data.raisedAmount / 1e6}{" "}
							{fa.common.price.millionToman}
						</Typography>
						<Typography mt="6px">
							{fa.common.from}{" "}
							<Typography
								component="span"
								color="secondary.main"
								lineHeight="24px"
							>
								{data.targetAmount / 1e6}{" "}
								{fa.common.price.millionToman}
							</Typography>{" "}
							{fa.common.price.targetAmount}
						</Typography>
						<Typography>
							{fa.common.by}{" "}
							<Typography
								component="span"
								color="success.light"
								lineHeight="24px"
							>
								{data.raiseCount} {fa.common.supporter}
							</Typography>{" "}
							{fa.common.supplied}.
						</Typography>
						<Box mt="21px">
							<Link
								to={`${routes.payment}?${searchParams.campaignId}=${campaignId}`}
							>
								<Button
									fullWidth
									size="large"
									color="secondary"
								>
									{fa.common.cashDonate}
								</Button>
							</Link>
							<Button
								fullWidth
								size="large"
								sx={{ mt: "10px" }}
								color="inherit"
								variant="outlined"
							>
								{fa.common.share}
							</Button>
						</Box>
					</Analytics>

					{!campaignDonationsError &&
						campaignDonations &&
						campaignDonations.items.length && (
							<CampaignSupports
								donations={campaignDonations.items}
								raiseCount={data.raiseCount}
							/>
						)}
				</Stack>
			</Stack>
		</Container>
	);
}

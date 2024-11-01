import styled from "@emotion/styled";
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
import CampaignDescription, {
	CampaignDescriptionLoading,
} from "@/ui/components/campaign/campaign-details/CampaignDescription";
import { Skeleton } from "@mui/material";
import { split } from "@/app/lib/price";
import { toast } from "react-toastify";

const Analytics = styled(Card)`
	padding: 30px;
	text-align: center;
`;

export default function CampaignDetailsPage() {
	const { campaignId } = useParams();
	const { data, error, isPending } = useCampaignDetails(
		Number(campaignId),
	);
	const {
		data: campaignItems,
		error: campaignItemsError,
		isPending: isCampaignItemsPending,
	} = useCampaignItems(Number(campaignId));
	const {
		data: campaignDonations,
		error: campaignDonationsError,
		isPending: isCampaignDonationsPending,
	} = useCampaignDonations(Number(campaignId));

	async function share() {
		const href = window.location.href;
		try {
			await navigator.clipboard.writeText(href);
			toast.success("آدرس کمپین در حافظه موقت کپی شد.");
		} catch (_) {
			// TODO
		}
	}

	if (error) return <></>;

	return (
		<>
			<Container>
				<Stack
					direction={{ xs: "column", lg: "row" }}
					mt={1}
					gap={1}
					// 96px => app header, 8px => mt={1} upper stack
					height={{
						xs: undefined,
						lg: "calc(100vh - (96px + 8px))",
					}}
				>
					<Stack
						flex={1}
						overflow="auto"
						order={{ xs: 2, lg: 1 }}
						p={1}
					>
						{isPending ? (
							<CampaignDescriptionLoading />
						) : (
							<CampaignDescription data={data} />
						)}

						{campaignItems &&
							!campaignItemsError &&
							!isCampaignItemsPending && (
								<CampaignItems items={campaignItems} />
							)}
					</Stack>
					<Stack
						width={{ xs: "100%", lg: 400 }}
						order={{ xs: 1, lg: 1 }}
						display={{ xs: "contents", lg: "flex" }}
					>
						{isPending ? (
							<AnalyticsLoading />
						) : (
							<Analytics
								elevation={3}
								sx={{ mt: 1 }}
							>
								<Box>
									<Participation
										size={133}
										percent={getRaisedPercent(
											data.targetAmount,
											data.raisedAmount,
										)}
										fontSize={32}
										percentFontSize={22}
									/>
								</Box>
								<Box my={4}>
									<Typography
										color="secondary.main"
										fontSize={32}
										fontWeight={700}
									>
										{split(data.raisedAmount)}{" "}
										{fa.common.price.rial}
									</Typography>
									<Typography>
										{fa.common.from}{" "}
										<Typography
											component="span"
											color="secondary.main"
											lineHeight="24px"
										>
											{split(data.targetAmount)}{" "}
											{fa.common.price.rial}
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
											{data.raiseCount}{" "}
											{fa.common.supporter}
										</Typography>{" "}
										{fa.common.supplied}.
									</Typography>
								</Box>
								<Box>
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
										onClick={share}
									>
										{fa.common.share}
									</Button>
								</Box>
							</Analytics>
						)}

						{data &&
							!campaignDonationsError &&
							campaignDonations &&
							!!campaignDonations.items.length &&
							!isCampaignDonationsPending && (
								<CampaignSupports
									donations={campaignDonations.items}
									raiseCount={data.raiseCount}
								/>
							)}
					</Stack>
				</Stack>
			</Container>
		</>
	);
}

const AnalyticsLoading = () => (
	<Skeleton
		width="100%"
		height={490}
		sx={{ mt: 1 }}
	/>
);

import getImageSource from "@/app/lib/get-image-source";
import { ICampaign } from "@/domain/campaign/ICampaign";
import styled from "@emotion/styled";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography/Typography";

const Img = styled.img`
	max-height: 490px;
	height: 100%;
`;

interface ICampaignDescriptionProps {
	data: ICampaign;
}

export default function CampaignDescription({
	data,
}: ICampaignDescriptionProps) {
	return (
		<>
			<Img src={getImageSource(data.coverImageFileId)} />
			<Typography
				fontWeight={700}
				fontSize={32}
				my={3}
			>
				{data.title}
			</Typography>
			{data.description.split("\n").map((d, i) => (
				<Typography
					fontSize={18}
					lineHeight={"32px"}
					textAlign="justify"
					px={1}
					key={i}
				>
					{d}
				</Typography>
			))}
		</>
	);
}

// loading

const ImgLoading = styled(Skeleton)`
	width: 100%;
	max-height: 490px;
	height: 100%;
`;

export function CampaignDescriptionLoading() {
	return (
		<>
			<ImgLoading />
			<Skeleton
				variant="text"
				sx={{ fontSize: 32, my: 3 }}
			/>
			<Skeleton
				variant="rectangular"
				width="100%"
				sx={{ height: { xs: 200, lg: 400 } }}
			/>
		</>
	);
}

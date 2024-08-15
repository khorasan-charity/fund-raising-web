import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import { Donate } from "@/ui/components/donate/Donate";
import { MedicineList } from "@/ui/components/medicine/MedicineList";
import { useEffect, useState } from "react";
import { MedicineDao } from "@/domain";
import { delay, randomInt } from "@/app/utils";
import { fa } from "@/ui/i18n";
import Typography from "@mui/material/Typography";
import { MedicineListLoading } from "@/ui/components/medicine/MedicineListLoading";

const MEDICINE_LIST: Array<MedicineDao> = Array.from({ length: 100 }).map(
	(_, idx) => {
		const total = randomInt(10, 100);
		const unitPrice = randomInt(10000, 25000000);
		const paidAmount = randomInt(0, total * unitPrice);

		return {
			id: idx.toString(),
			total,
			paidAmount,
			unitPrice,
			title: "داروی " + idx.toString(),
		};
	},
);

const getMedicineList = async () => {
	await delay(1000);
	return Promise.resolve(MEDICINE_LIST);
};

const MIN_PRICE = 100000;

export function Home() {
	const [modal, setModal] = useState(false);
	const isDesktop = useMediaQuery<ThemeOptions>(
		theme => theme.breakpoints?.up?.("lg")!,
	);
	const [medicineList, setMedicineList] = useState<Array<MedicineDao>>(
		[],
	);
	const [loading, setLoading] = useState(false);

	const fetchMedicineList = async () => {
		setLoading(true);
		const response = await getMedicineList();
		setMedicineList(response);
		setLoading(false);
	};

	const onPurchase = (donate: number) => {};

	useEffect(() => {
		fetchMedicineList();
	}, []);

	useEffect(() => {
		if (isDesktop) {
			setModal(false);
		}
	}, [isDesktop]);

	return (
		<>
			<Stack
				direction={{ lg: "row-reverse" }}
				my={2}
			>
				{isDesktop && (
					<Box>
						<Donate
							min={MIN_PRICE}
							onPurchase={onPurchase}
						/>
					</Box>
				)}
				<Box
					flex={1}
					mt={{ xs: 2, lg: 0 }}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="h6">
							{fa.medicine_list.title}
						</Typography>

						{!isDesktop && (
							<Button onClick={() => setModal(true)}>
								{fa.donate.purchase}
							</Button>
						)}
					</Stack>
					{loading ? (
						<MedicineListLoading />
					) : (
						<MedicineList data={medicineList} />
					)}
				</Box>
			</Stack>

			{/* Donate dialog */}
			<Dialog
				onClose={() => setModal(false)}
				open={modal}
				PaperProps={{
					sx: {
						borderRadius: 2,
					},
				}}
			>
				<Donate
					onPurchase={val => {
						setModal(false);
						onPurchase(val);
					}}
					min={MIN_PRICE}
				/>
			</Dialog>
		</>
	);
}

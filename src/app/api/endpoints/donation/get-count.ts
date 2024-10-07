import request from "../../base/request";

export default function getDonationCount(): Promise<number> {
	return request.get("/donation/count");
}

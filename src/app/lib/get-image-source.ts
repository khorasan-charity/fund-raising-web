import { apiBaseUrl } from "./env";

export default function getImageSource(imageId: string) {
	return `${apiBaseUrl}/file/download/${imageId}`;
}

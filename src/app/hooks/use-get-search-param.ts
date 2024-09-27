import { useSearchParams as useReactRouterSearchParams } from "react-router-dom";

export default function useSearchParams() {
	const [searchParams] = useReactRouterSearchParams();

	function getParam(param: string) {
		return searchParams.get(param);
	}

	return {
		getParam,
	};
}

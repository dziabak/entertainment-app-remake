import { MediaContentData } from "../../../types/types";

const MediaContentHeader = ({
	query,
	filteredData,
	isSuccess,
	title,
}: {
	query: string;
	title: string;
	isSuccess: boolean;
	filteredData: MediaContentData;
}) => {
	let queryText: JSX.Element;

	const cn = "text-xl font-thin tracking-tight font-main text-c-white";

	if (isSuccess && query === "") {
		queryText = <p className={cn}>{title}</p>;
	} else if (query !== "" && filteredData!.length === 1) {
		queryText = (
			<p className={cn}>
				Found {filteredData!.length} result for "{query}"
			</p>
		);
	} else if (query !== "") {
		queryText = (
			<p className={cn}>
				Found {filteredData!.length} results for "{query}"
			</p>
		);
	}

	return <>{queryText!}</>;
};

export default MediaContentHeader;

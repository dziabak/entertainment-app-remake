const MediaContentTileGradient = ({
	displayType,
}: {
	displayType?: "trending" | "standard";
}) => {
	let content: JSX.Element;

	if (displayType === "trending") {
		content = (
			<div className="absolute top-0 w-full h-full rounded-lg bg-gradient-to-t from-black via-transparent"></div>
		);
	}
	return <>{content!}</>;
};

export default MediaContentTileGradient;

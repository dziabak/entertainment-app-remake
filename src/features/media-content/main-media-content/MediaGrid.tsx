const MediaGrid = ({ content }: { content: JSX.Element | JSX.Element[] }) => {
	return (
		<div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
			{content}
		</div>
	);
};

export default MediaGrid;

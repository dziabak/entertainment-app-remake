type MediaContentTileImageProps = {
	thumbnailMobile: string;
	thumbnailTablet: string;
	thumbnailDesktop: string;
};

const MediaContentTileImage = ({
	thumbnailMobile,
	thumbnailTablet,
	thumbnailDesktop,
}: MediaContentTileImageProps) => {
	return (
		<picture>
			<source media="(min-width: 1024px)" srcSet={thumbnailDesktop} />
			<source media="(min-width: 768px)" srcSet={thumbnailTablet} />
			<img srcSet={thumbnailMobile} alt="" className="rounded-lg" />
		</picture>
	);
};

export default MediaContentTileImage;

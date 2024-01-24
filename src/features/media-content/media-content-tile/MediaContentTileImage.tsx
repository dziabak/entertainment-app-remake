type MediaContentTileImageProps = {
	thumbnailMobile: string;
	thumbnailTablet: string;
	thumbnailDesktop: string;
	alt: string;
};

const MediaContentTileImage = ({
	thumbnailMobile,
	thumbnailTablet,
	thumbnailDesktop,
	alt,
}: MediaContentTileImageProps) => {
	return (
		<picture>
			<source media="(min-width: 1024px)" srcSet={thumbnailDesktop} />
			<source media="(min-width: 768px)" srcSet={thumbnailTablet} />
			<img
				srcSet={thumbnailMobile}
				alt={alt}
				className="rounded-lg object-cover w-full h-full"
			/>
		</picture>
	);
};

export default MediaContentTileImage;

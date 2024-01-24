// EXTERNAL IMPORTS
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrendingCarousel = ({
	content,
}: {
	content: JSX.Element | JSX.Element[];
}) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 5000, min: 1280 },
			items: 2,
			slidesToSlide: 1,
			partialVisibilityGutter: 120,
		},
		tablet: {
			breakpoint: { max: 1280, min: 760 },
			items: 2,
			slidesToSlide: 1,
			partialVisibilityGutter: 60,
		},
		mobile: {
			breakpoint: { max: 760, min: 0 },
			items: 1,
			slidesToSlide: 1,
			partialVisibilityGutter: 120,
		},
	};

	return (
		<Carousel
			responsive={responsive}
			partialVisible={true}
			swipeable={true}
			draggable={false}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={5000}
			transitionDuration={1000}
			removeArrowOnDeviceType={["tablet", "mobile"]}
			itemClass="pr-6 h-full">
			{content}
		</Carousel>
	);
};

export default TrendingCarousel;

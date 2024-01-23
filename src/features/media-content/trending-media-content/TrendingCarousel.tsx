import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrendingCarousel = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 3,
			slidesToSlide: 1,
			partialVisibilityGutter: 60,
		},
		tablet: {
			breakpoint: { max: 1280, min: 768 },
			items: 3,
			slidesToSlide: 1, // optional, default to 1.
			partialVisibilityGutter: 40,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 2,
			slidesToSlide: 1, // optional, default to 1.
			partialVisibilityGutter: 20,
		},
	};

	return (
		<Carousel
			partialVisible={true}
			swipeable={true}
			draggable={false}
			showDots={false}
			responsive={responsive}
			centerMode={false}
			ssr={false} // means to render carousel on server-side.
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={2000}
			// keyBoardControl={true}
			// customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			// containerClass=""
			removeArrowOnDeviceType={["tablet", "mobile"]}
			itemClass="pr-4">
			{children}
		</Carousel>
	);
};

export default TrendingCarousel;

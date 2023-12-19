// BUILT-IN IMPORTS
import { useState } from "react";
import { Link } from "react-router-dom";
// EXTERNAL IMPORTS
import { useMutation, useQuery } from "@tanstack/react-query";
//INTERNAL IMPORTS
import { MediaContentTileProps } from "../../../types/types";
import { queryClient } from "../../../services/api/http";
import { fetchAllMediaContentData } from "../../../services/api/http";
import { updateBookmark } from "../../../services/api/http";
import { makeNiceUrl } from "../../../utils/make-nice-url";
import MediaContentTileLabels from "../reusable-media-content/MediaContentTileLabels";
import MediaContentTilePlayHover from "../reusable-media-content/MediaContentTilePlayHover";
import BookmarkButton from "../reusable-media-content/BookmarkButton";

const MediaContentTile = ({
	title,
	thumbnail,
	year,
	category,
	rating,
	isBookmarked,
}: // isTrending,
MediaContentTileProps) => {
	const niceUrl = makeNiceUrl(title);

	useQuery({
		queryKey: ["allMediaContent"],
		queryFn: fetchAllMediaContentData,
	});

	const { mutate } = useMutation({
		mutationFn: updateBookmark,
		// onSuccess: (data) => {
		// 	queryClient.invalidateQueries();
		// 	console.log(data);
		// },
	});

	const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked);

	const bookmarkStateChangeHandler = () => {
		setIsBookmarkedState((prevIsBookmarkedState) => !prevIsBookmarkedState);

		const queryMediaContent: { title: string }[] | undefined =
			queryClient.getQueryData(["allMediaContent"]);

		const queryIndex = queryMediaContent?.findIndex(
			(item) => item.title === title
		);

		const queryObject = queryMediaContent?.find((item) => item.title === title);

		const updatedData = { ...queryObject, isBookmarked: !isBookmarkedState };

		mutate({ id: queryIndex, updatedData: updatedData });
	};

	return (
		<div className="relative font-thin font-main text-c-light-blue">
			<Link to={`/${niceUrl}`} className="group">
				<div className="relative">
					<img src={thumbnail.regular.small} alt="" className="rounded-lg" />
					<MediaContentTilePlayHover />
				</div>
				<MediaContentTileLabels
					title={title}
					year={year}
					category={category}
					rating={rating}
				/>
			</Link>
			<BookmarkButton
				isBookmarked={isBookmarkedState}
				onClick={bookmarkStateChangeHandler}
			/>
		</div>
	);
};

export default MediaContentTile;

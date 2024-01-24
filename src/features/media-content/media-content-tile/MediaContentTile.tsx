// BUILT-IN IMPORTS
import { useState } from "react";
import { Link } from "react-router-dom";
// EXTERNAL IMPORTS
import { useMutation, useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { MediaContentData, MediaContentTileProps } from "../../../types/types";
import { queryClient } from "../../../services/api/http";
import { fetchAllMediaContentData } from "../../../services/api/http";
import { updateBookmark } from "../../../services/api/http";
import MediaContentTileLabelsRenderer from "./MediaContentTileLabelsRenderer";
import MediaContentTilePlayHover from "./MediaContentTilePlayHover";
import MediaContentTileImage from "./MediaContentTileImage";
import BookmarkButton from "./BookmarkButton";
import useLinkTo from "../../../hooks/useLinkTo";

const MediaContentTile = ({
	title,
	thumbnail,
	year,
	category,
	rating,
	isBookmarked,
	mutateQueryKey,
	displayType,
}: MediaContentTileProps) => {
	const linkTo = useLinkTo(title);

	useQuery({
		queryKey: ["allMediaContent"],
		queryFn: fetchAllMediaContentData,
	});

	const { mutate } = useMutation({
		mutationFn: updateBookmark,
		onSuccess: (data) => {
			queryClient.setQueryData(mutateQueryKey!, (oldData: MediaContentData) => {
				if (!oldData) return oldData;
				const itemIndex = oldData.findIndex(
					(item) => item.title === data.title
				);

				if (itemIndex === -1) return oldData;

				const updatedData = [...oldData];

				updatedData[itemIndex] = {
					...oldData[itemIndex],
					isBookmarked: data.isBookmarked,
				};

				return updatedData;
			});
		},
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
			<Link to={linkTo} className="group">
				<div className="relative">
					<MediaContentTileImage
						thumbnailMobile={thumbnail.regular.small}
						thumbnailTablet={thumbnail.regular.medium}
						thumbnailDesktop={thumbnail.regular.large}
					/>
					<MediaContentTilePlayHover />
				</div>
				<MediaContentTileLabelsRenderer
					displayType={displayType}
					category={category}
					rating={rating}
					title={title}
					year={year}
				/>
			</Link>
			<BookmarkButton
				isBookmarked={isBookmarked}
				onClick={bookmarkStateChangeHandler}
			/>
		</div>
	);
};

export default MediaContentTile;
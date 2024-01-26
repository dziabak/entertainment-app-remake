// BUILT-IN IMPORTS
import { useState } from "react";
// EXTERNAL IMPORTS
import { useMutation, useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { queryClient } from "../services/api/http";
import { fetchAllMediaContentData, updateBookmark } from "../services/api/http";
import { MediaContentData } from "../types/types";

const useBookmarks = (
	title: string,
	isBookmarked: boolean,
	mutateQueryKey: (string | undefined)[] | undefined
) => {
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

	return {
		bookmarkStateChangeHandler,
	};
};

export default useBookmarks;

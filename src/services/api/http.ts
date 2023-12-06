// EXTERNAL IMPORTS
import { QueryClient } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { ContentData } from "../../types/types";

export const queryClient = new QueryClient();

export const fetchAllContentData = async () => {
	const response = await fetch("../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allContentData: ContentData = await response.json();

	console.log(allContentData);
	return allContentData;
};

// EXTERNAL IMPORTS
import { QueryClient } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { MediaContentData } from "../../types/types";

export const queryClient = new QueryClient();

export const fetchAllMediaContentData = async () => {
	const response = await fetch("../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	return allMediaContentData;
};

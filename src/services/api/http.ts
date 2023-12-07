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

export const fetchMoviesContentData = async () => {
	const response = await fetch("../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const moviesContentData = allMediaContentData.filter((item) => {
		return item.category.includes("Movie");
	});

	return moviesContentData;
};

export const fetchSeriesContentData = async () => {
	const response = await fetch("../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const seriesContentData = allMediaContentData.filter((item) => {
		return item.category.includes("TV Series");
	});

	return seriesContentData;
};

export const fetchBookmarkedContentData = async () => {
	const response = await fetch("../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const bookmarkedContentData = allMediaContentData.filter((item) => {
		return item.isBookmarked === true;
	});

	return bookmarkedContentData;
};

export const fetchTrendingContentData = async () => {
	const response = await fetch("../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const trendingContentData = allMediaContentData.filter((item) => {
		return item.isTrending === true;
	});

	return trendingContentData;
};

export const fetchMediaContentItem = async ({
	id,
}: {
	id: string | undefined;
}) => {
	const response = await fetch("../data.json");

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const filteredData = allMediaContentData.filter((item) => {
		// const combinedString = combineStrings(job.position, job.company);
		return item.title === id;
	});

	return filteredData;
};

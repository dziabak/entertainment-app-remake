// EXTERNAL IMPORTS
import { QueryClient } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { MediaContentData } from "../../types/types";
import { makeNiceUrl } from "../../utils/make-nice-url";

export const queryClient = new QueryClient();

export const fetchAllMediaContentData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	return allMediaContentData;
};

export const fetchMoviesContentData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

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
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

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
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

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

export const fetchBookmarkedMoviesData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const bookmarkedContentData = allMediaContentData.filter((item) => {
		return item.isBookmarked === true && item.category.includes("Movie");
	});

	return bookmarkedContentData;
};

export const fetchBookmarkedSeriesData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const bookmarkedContentData = allMediaContentData.filter((item) => {
		return item.isBookmarked === true && item.category.includes("TV Series");
	});

	return bookmarkedContentData;
};

export const fetchTrendingContentData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

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
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allMediaContentData: MediaContentData = await response.json();

	const filteredData = allMediaContentData.filter((item) => {
		const niceUrl = makeNiceUrl(item.title);
		return niceUrl === id;
	});

	return filteredData;
};

export const updateBookmark = async ({
	id,
	updatedData,
}: {
	id: number | undefined;
	updatedData: {};
}) => {
	const response = await fetch(
		`https://react-databases-6c0bd-default-rtdb.europe-west1.firebasedatabase.app/entertainment-app-remake/${id}.json`,
		{
			method: "PUT",
			headers: { "Content-Type": "application.json" },
			body: JSON.stringify(updatedData),
		}
	);

	if (!response.ok) {
		throw new Error("Failed to update bookmark");
	}

	return response.json();
};

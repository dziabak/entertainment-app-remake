export type MediaContentData = {
	title: string;
	thumbnail: {
		trending?: { small: string; large: string };
		regular: { small: string; medium: string; large: string };
	};
	year: number;
	category: string;
	rating: string;
	isBookmarked: boolean;
	isTrending: boolean;
	description?: string;
	mutateQueryKey?: string[];
}[];

export type MediaContentTileProps = MediaContentData[number];

export type MediaContentData = {
	title: string;
	thumbnail: {
		trending?: { small: string; large: string };
		regular: { small: string; medium: string; large: string };
	};
	alt: string;
	year: number;
	category: string;
	rating: string;
	isBookmarked: boolean;
	isTrending: boolean;
	description?: string;
	mutateQueryKey?: string[];
	displayType?: "trending" | "standard";
}[];

export type MediaContentTileProps = MediaContentData[number];

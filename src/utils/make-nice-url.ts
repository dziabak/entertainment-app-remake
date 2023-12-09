export const makeNiceUrl = (title: string) => {
	const formattedTitle = title.toLowerCase().replace(/ /g, "-");

	return formattedTitle;
};

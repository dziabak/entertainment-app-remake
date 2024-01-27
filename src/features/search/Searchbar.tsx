// BUILT-IN IMPORTS
import { useState, useRef } from "react";
// EXTERNAL IMPORTS
import { useIsFetching } from "@tanstack/react-query";
// INTERNAL IMPORTS
import SearchbarLoadingSpinner from "./SearchbarLoadingSpinner";

const Searchbar = ({
	onSearch,
	placeholderText,
}: {
	onSearch: (searchValue: string) => void;
	placeholderText: string;
}) => {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchValue, setSearchValue] = useState("");

	const isFetching = useIsFetching();

	const handleSearchInput = () => {
		if (isFetching === 0) {
			setSearchValue(searchInputRef.current!.value);
			onSearch(searchInputRef.current!.value);
		}
	};

	return (
		<div className="flex flex-row items-center p-2 my-6 bg-c-black">
			<label htmlFor="search">
				{isFetching === 0 ? (
					<img
						src="../../assets/icon-search.svg"
						alt="Icon of a magnifying glass for a search functionality"
						className="mr-2"
					/>
				) : (
					<SearchbarLoadingSpinner />
				)}
			</label>
			<input
				id="search"
				value={searchValue}
				onChange={handleSearchInput}
				ref={searchInputRef}
				type="text"
				placeholder={placeholderText}
				className="w-full p-2 font-thin font-main bg-c-black text-c-white"
			/>
		</div>
	);
};

export default Searchbar;

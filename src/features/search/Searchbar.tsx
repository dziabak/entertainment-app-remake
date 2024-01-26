//BUILT-IN IMPORTS
import { useState, useRef } from "react";

const Searchbar = ({
	onSearch,
	placeholderText
}: {
	onSearch: (searchValue: string) => void;
	placeholderText: string;
}) => {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchValue, setSearchValue] = useState("");

	const handleSearchInput = () => {
		setSearchValue(searchInputRef.current!.value);
		onSearch(searchInputRef.current!.value);
	};

	return (
		<div className="flex flex-row items-center p-2 my-6 bg-c-black">
			<img src="../../assets/icon-search.svg" alt="Icon of a magnifying glass for a search functionality" className="mr-2" />
			<input
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

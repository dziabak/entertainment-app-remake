//BUILT-IN IMPORTS
import { useState, useRef } from "react";

const Searchbar = ({
	onSearch,
}: {
	onSearch: (searchValue: string) => void;
}) => {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchValue, setSearchValue] = useState("");

	const handleSearchInput = () => {
		setSearchValue(searchInputRef.current!.value);
		onSearch(searchInputRef.current!.value);
	};

	return (
		<div className="flex flex-row items-center p-2 mt-2 mb-6 bg-c-black">
			<img src="../../assets/icon-search.svg" alt="" className="mr-2" />
			<input
				value={searchValue}
				onChange={handleSearchInput}
				ref={searchInputRef}
				type="text"
				placeholder="Search for movies or TV series"
				className="w-full p-2 font-thin font-main bg-c-black text-c-white"
			/>
		</div>
	);
};

export default Searchbar;

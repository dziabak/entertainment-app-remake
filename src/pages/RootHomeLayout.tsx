//BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
// import Searchbar from "../features/search/Searchbar";

const RootHomeLayout = () => {
	return (
		<>
			<div>RootHomeLayout</div>
			{/* <Searchbar /> */}
			<Outlet />
		</>
	);
};

export default RootHomeLayout;

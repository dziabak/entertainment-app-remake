// BUILT-IN IMPORTS
import { useLocation } from "react-router-dom";
// INTERNAL IMPORTS
import { makeNiceUrl } from "../utils/make-nice-url";

const useLinkTo = (title: string) => {
	const location = useLocation();
	const niceUrl = makeNiceUrl(title);

	if (location.pathname === "/") {
		return `/home/${niceUrl}`
	}

	if (location.pathname.includes('/') && location.pathname.indexOf('/') !== location.pathname.lastIndexOf('/')) {
		return `${location.pathname}`;
	  }

	return `${location.pathname}/${niceUrl}`;
};

export default useLinkTo;

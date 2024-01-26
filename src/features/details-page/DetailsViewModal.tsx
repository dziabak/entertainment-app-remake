//BUILT-IN IMPORTS
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
//EXTERNAL IMPORTS
import { useOnClickOutside } from "usehooks-ts";

const DetailsViewModal = ({ children }: { children: JSX.Element }) => {
	const ref = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const handleClickOutside = () => {
		navigate("..");
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<div
			ref={ref}
			className="z-20 p-8 space-y-8 rounded-lg cursor-default lg:mt-16 lg:p-16 lg:max-w-prose bg-c-dark-blue">
			{children}
		</div>
	);
};

export default DetailsViewModal;

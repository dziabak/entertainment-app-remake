//INTENRAL IMPORTS
import DetailsViewModal from "./DetailsViewModal";
import ErrorBlock from "../../components/ui/ErrorBlock";

const DetailsViewError = () => {
	return (
		<DetailsViewModal>
			<div className="flex flex-col items-center m-16 space-y-12">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1}
					stroke="currentColor"
					className="w-48 h-48 text-c-white">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
					/>
				</svg>
				<ErrorBlock
					errorHeader="We could not find the thing you're looking for!"
					errorMessage="Please check if the provided link is correct."
				/>
			</div>
		</DetailsViewModal>
	);
};

export default DetailsViewError;

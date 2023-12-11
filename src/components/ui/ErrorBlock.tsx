type ErrorBlockProps = {
	errorHeader: string;
	errorMessage: string;
};

const ErrorBlock = ({ errorHeader, errorMessage }: ErrorBlockProps) => {
	return (
		<div className="space-y-4 font-main font-normal text-center">
			<p className="text-2xl text-c-white">{errorHeader}</p>
			<p className="font-thin text-c-white opacity-70">{errorMessage}</p>
		</div>
	);
};

export default ErrorBlock;

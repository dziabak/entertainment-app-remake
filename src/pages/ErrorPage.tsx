import ErrorBlock from "../components/ui/ErrorBlock";

const ErrorPage = () => {
	return (
		<div className="flex items-center justify-center mt-32 lg:mt-52">
			<ErrorBlock
				errorHeader="We are sorry, but there was an error"
				errorMessage="The page you're looking for doesn't exist"
			/>
		</div>
	);
};

export default ErrorPage;

const LoadingSpinner = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div
				className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-c-white opacity-70"
				role="status">
				<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Loading...
				</span>
			</div>
			<p className="mt-3 text-2xl font-thin font-main text-c-white opacity-70">Loading...</p>
		</div>
	);
};

export default LoadingSpinner;

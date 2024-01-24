const MediaContentTilePlayHover = () => {
	return (
		<div className="absolute top-0 hidden w-full h-full group-hover:block">
			<div className="absolute top-0 w-full h-full bg-black rounded-lg opacity-50"></div>
			<div className="absolute w-24 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 bg-c-white inset-1/2"></div>
			<div className="absolute flex items-center justify-center inset-1/2">
				<div className="absolute flex flex-row items-center">
					<svg
						className=""
						width="30"
						height="30"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
							fill="#FFF"
						/>
					</svg>
					<p className="mx-3 font-main text-c-white">Play</p>
				</div>
			</div>
		</div>
	);
};

export default MediaContentTilePlayHover;

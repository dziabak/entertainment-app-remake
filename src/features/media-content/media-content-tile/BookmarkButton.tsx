type BookmarkButtonProps = {
	isBookmarked: boolean;
	onClick: () => void;
};

const BookmarkButton = ({ isBookmarked, onClick }: BookmarkButtonProps) => {
	return (
		<div className="absolute right-4 top-4">
			<button
				onClick={onClick}
				className="flex items-center justify-center w-10 h-10 p-3 rounded-full bg-black/40 group hover:bg-white/100">
				{isBookmarked ? (
					<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
							fill="#FFF"
							className="group-hover:fill-c-black"
						/>
					</svg>
				) : (
					<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
							stroke="#FFF"
							strokeWidth="1.5"
							fill="none"
							className="group-hover:stroke-c-black"
						/>
					</svg>
				)}
			</button>
		</div>
	);
};

export default BookmarkButton;

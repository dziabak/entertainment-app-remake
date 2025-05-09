// BUILT-IN IMPORTS
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
	const activeClass = ({ isActive }: { isActive: boolean }) =>
		isActive ? "[&_path]:fill-c-white" : "";

	return (
		<nav className="z-20 md:pt-4 lg:py-4 lg:h-screen lg:fixed lg:left-0 lg:pl-4 3xl:left-auto 3xl:pl-0">
			<div className="flex flex-row items-center justify-between p-4 bg-c-dark-blue md:rounded-lg lg:flex-col lg:h-full">
				<Link to="/home" data-testid="navigation-logo-btn">
					<svg
						width="33"
						height="27"
						xmlns="http://www.w3.org/2000/svg"
						className="group">
						<path
							d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
							fill="#FC4747"
							className="group-hover:fill-c-light-blue"
						/>
					</svg>
				</Link>
				<div className="flex flex-row space-x-4 lg:flex-col lg:space-x-0 lg:space-y-8 lg:h-full lg:mt-16">
					<NavLink to="/home" className={activeClass} data-testid="navigation-home-btn">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							className="group">
							<path
								d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
								fill="#5A698F"
								className="group-hover:fill-c-red"
							/>
						</svg>
					</NavLink>
					<NavLink to="/movies" className={activeClass} data-testid="navigation-movies-btn">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							className="group">
							<path
								d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
								fill="#5A698F"
								className="group-hover:fill-c-red"
							/>
						</svg>
					</NavLink>
					<NavLink to="/series" className={activeClass} data-testid="navigation-series-btn">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							className="group">
							<path
								d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
								fill="#5A698F"
								className="group-hover:fill-c-red"
							/>
						</svg>
					</NavLink>
					<NavLink to="/bookmarked" className={activeClass} data-testid="navigation-bookmarked-btn">
						<svg
							width="17"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							className="group">
							<path
								d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
								fill="#5A698F"
								className="group-hover:fill-c-red"
							/>
						</svg>
					</NavLink>
				</div>
				<img
					src="../../assets/image-avatar.png"
					alt="Avatar of the user"
					// HOVER FUNCTIONALITY DISABLED TO NOT CONFUSE USERS AS THERE IS NO PROFILE SCREEN AT THE MOMENT
					// className="w-10 transition-colors border-2 rounded-full cursor-pointer hover:border-c-red"
					className="w-10 border-2 rounded-full"
				/>
			</div>
		</nav>
	);
};

export default Navigation;

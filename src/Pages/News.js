import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "../Styling/News.css";
import "../Styling/Header.css";
import "../Styling/Colours.css";
import NewsContent from "../Data/NewsContent.js";
import NavBarStyleHelper from "../Styling/NavBarStyling.js";

function News() {
	const [NavBarStyle, setNavBarStyle] = useState(NavBarStyleHelper(0));
	useScrollPosition(({ prevPos, currPos }) => {
		setNavBarStyle(NavBarStyleHelper(currPos.y, window.innerHeight));
	});

	return (
		<div className="News-Outer">
			<div className="Header" style={NavBarStyle}>
				<div className="Header-Left">
					<Link to="/" className="HashLink">
						Home
					</Link>
				</div>
			</div>
			<h1>iBlind News</h1>
			{NewsContent.map(post => (
				<NewsPost Post={post} />
			))}
		</div>
	);
}

function NewsPost({ Post }) {
	const Months = [
		"Jan.",
		"Feb.",
		"Mar.",
		"Apr.",
		"May",
		"Jun.",
		"Jul.",
		"Aug.",
		"Sept.",
		"Oct.",
		"Nov.",
		"Dec."
	];

	return (
		<div className="News">
			<div>
				<h1>{Post.Title}</h1>
				<p>{Post.Content}</p>
				<p>
					{Months[Post.Date.getMonth()] +
						" " +
						Post.Date.getDate() +
						", " +
						Post.Date.getFullYear()}
				</p>
			</div>
			<div className="News-Date"></div>
			<div className="News-Content;"></div>
		</div>
	);
}

export default News;

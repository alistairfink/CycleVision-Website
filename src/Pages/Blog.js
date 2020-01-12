import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "../Styling/Blog.css";
import "../Styling/Header.css";
import "../Styling/Colours.css";
import BlogContent from "../Data/BlogContent.js";
import NavBarStyleHelper from "../Styling/NavBarStyling.js";

function Blog() {
  const [NavBarStyle, setNavBarStyle] = useState(NavBarStyleHelper(0));
  useScrollPosition(({ prevPos, currPos }) => {
    setNavBarStyle(NavBarStyleHelper(currPos.y, window.innerHeight));
  });

	return (
		<div className="Blog-Outer">
			<div className="Header" style={NavBarStyle}>
				<div className="Header-Left">
					<Link to="/" className="HashLink">
						Home
					</Link>
				</div>
			</div>
			<h1>iBlind Blog</h1>
			{BlogContent.map(post => (
				<BlogPost Post={post} />
			))}
		</div>
	);
}

function BlogPost({ Post }) {
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
		<div className="Blog">
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
			<div className="Blog-Date"></div>
			<div className="Blog-Content;"></div>
		</div>
	);
}

export default Blog;

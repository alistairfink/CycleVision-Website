import React, { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "../Styling/News.css";
import "../Styling/Universal.css";
import "../Styling/Colours.css";
import NewsContent from "../Data/NewsContent.js";
import NavBarStyleHelper from "../Styling/NavBarStyling.js";

function News() {
	const [NavBarStyle, setNavBarStyle] = useState(NavBarStyleHelper(0));
	const NewsHeader = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useScrollPosition(({ prevPos, currPos }) => {
		setNavBarStyle(
			NavBarStyleHelper(currPos.y, NewsHeader.current.clientHeight)
		);
	});

	return (
		<div>
			<div className="Header" style={NavBarStyle}>
				<div className="Header-Left">
					<Link to="/" className="HashLink">
						Home
					</Link>
				</div>
			</div>
			<div ref={NewsHeader} className="News-Header">
				<h1>News</h1>
			</div>
			<div className="News-Body">
				{NewsContent.map((post, index) => (
					<NewsPost Post={post} key={index} />
				))}
			</div>
			<div className="Footer">
				<Link to="/" className="HashLink">
					Home
				</Link>
			</div>
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

	let renderContent = () => {
		let jsx = [];
		let prev = 0;
		for (let i = 0; i < Post.Content.length; i++) {
			if (Post.Content[i] === "{") {
				jsx.push(addParagraph(Post.Content.substring(prev, i)));
				let j = i;
				for (; j < Post.Content.length && Post.Content[j] !== "}"; j++) {}
				jsx.push(addImage(Post.Content.substring(i + 1, j)));
				prev = j + 1;
				i = j
			}
		}

		jsx.push(addParagraph(Post.Content.substring(prev, Post.Content.length)));
		return jsx;
	};

	let addParagraph = text => {
		console.log(text)
		return <p>{text}</p>;
	};

	let addImage = imageIndex => {
		console.log(imageIndex)
		return (
			<img
				alt={Post.Title + " Image " + imageIndex}
				src={Post.Images[imageIndex]}
			/>
		);
	};

	return (
		<div className="News">
			<div className="News-Left"></div>
			<div className="News-Right">
				<h1>{Post.Title}</h1>
				<p>{renderContent()}</p>
			</div>
		</div>
	);
}

export default News;

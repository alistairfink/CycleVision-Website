// Libraries
import React, { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// Resoures
import HamburgerMenu from "../Resources/Hamburger.png";
import HamburgerMenuClose from "../Resources/CloseMenu.png";

// CSS
import "../Styling/News.css";
import "../Styling/Universal.css";
import "../Styling/Colours.css";

// JS
import NewsContent from "../Data/NewsContent.js";
import NavBarStyleHelper from "../Styling/NavBarStyling.js";
import UseWindowDimensions from "../Data/WindowDimensions.js";

function News() {
	const [NavBarStyle, setNavBarStyle] = useState(NavBarStyleHelper(0));
	const NewsHeader = useRef(null);
	const { width } = UseWindowDimensions();
	const [IsSmallScreen, setSmallScreen] = useState(false);
	const [MenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (width <= 641) {
			setSmallScreen(true);
		} else {
			setSmallScreen(false);
		}
	});

	useScrollPosition(({ prevPos, currPos }) => {
		setNavBarStyle(
			NavBarStyleHelper(currPos.y, NewsHeader.current.clientHeight)
		);
	});

	return (
		<div>
			{!IsSmallScreen ? (
				<div className="Header" style={NavBarStyle}>
					<div className="Header-Left">
						<Link to="/" className="HashLink">
							Home
						</Link>
					</div>
				</div>
			) : (
				<div>
					<img
						className="Header-HamburgerMenu"
						src={HamburgerMenu}
						alt="Menu"
						onClick={() => {
							setMenuOpen(true);
						}}
					/>
					{MenuOpen && (
						<div className="Header-HamburgerMenuExpanded">
							<img
								className="Header-HamburgerMenuExpanded-X"
								src={HamburgerMenuClose}
								alt="Close Menu"
								onClick={() => {
									setMenuOpen(false);
								}}
							/>
							<Link
								to="/"
								className="Header-HamburgerMenuLink"
								onClick={() => {
									setMenuOpen(false);
								}}
							>
								Home
							</Link>
						</div>
					)}
				</div>
			)}
			<div ref={NewsHeader} className="News-Header">
				<h1>News</h1>
			</div>
			<div className="News-Body">
				{NewsContent.map((post, index) => (
					<NewsPost
						Post={post}
						IsLast={index === NewsContent.length - 1}
						key={index}
					/>
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

function NewsPost({ Post, IsLast }) {
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
		let contentCounter = 0;
		for (let i = 0; i < Post.Content.length; i++) {
			if (Post.Content[i] === "{") {
				jsx.push(addParagraph(Post.Content.substring(prev, i), contentCounter));
				contentCounter++;
				let j = i;
				for (; j < Post.Content.length && Post.Content[j] !== "}"; j++) {}
				jsx.push(addImage(Post.Content.substring(i + 1, j), contentCounter));
				prev = j + 1;
				i = j;
				contentCounter++;
			}
		}

		jsx.push(
			addParagraph(
				Post.Content.substring(prev, Post.Content.length),
				contentCounter
			)
		);
		return jsx;
	};

	let addParagraph = (text, index) => {
		return <p key={Post.Title + " Content Index " + index}>{text}</p>;
	};

	let addImage = (imageIndex, index) => {
		return (
			<img
				key={Post.Title + " Content Index " + index}
				alt={Post.Title + " Image " + imageIndex}
				src={Post.Images[imageIndex]}
			/>
		);
	};

	let getDate = () => {
		return (
			Months[Post.Date.getMonth()] +
			" " +
			Post.Date.getDate() +
			", " +
			Post.Date.getFullYear()
		);
	};

	return (
		<div className="News">
			<div className="News-Left">
				<div className="News-Left-Date">
					<p>{getDate()}</p>
				</div>
				{!IsLast && <div className="News-Left-Line"></div>}
			</div>
			<div className="News-Right">
				<h1>{Post.Title}</h1>
				{renderContent()}
			</div>
		</div>
	);
}

export default News;

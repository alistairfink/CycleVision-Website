import React from "react";
import "../Styling/Blog.css";
import "../Styling/Colours.css";

function Blog() {
	const BlogContent = [
		{
			Title: "Title",
			Content: "Content",
			Date: new Date("December 17, 1995")
		},
		{
			Title: "Title2",
			Content: "Content2",
			Date: new Date("January 10, 1991")
		}
	];

	return (
		<div className="Blog-Outer">
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

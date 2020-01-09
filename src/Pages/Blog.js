import React from "react";
import "../Styling/Blog.css";

function Blog() {
	const BlogContent = [
		{
			Title: "Title",
			Content: "Content",
			Date: new Date("December 17, 1995 00:00:00")
		},
		{
			Title: "Title2",
			Content: "Content2",
			Date: new Date("January 10, 1995 00:00:00")
		}
	];
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
		<div>
			<h1>iBlind Blog</h1>
			{BlogContent.map(post => (
				<div>
					<h1>{post.Title}</h1>
					<p>{post.Content}</p>
					<p>
						{Months[post.Date.getMonth()] +
							" " +
							post.Date.getDate() +
							", " +
							post.Date.getFullYear()}
					</p>
				</div>
			))}
		</div>
	);
}

function BlogPost() {
	return (
		<div className="Blog">
			<div className="Blog-Date"></div>
			<div className="Blog-Content;"></div>
		</div>
	);
}

export default Blog;

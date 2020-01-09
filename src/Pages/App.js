import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home.js";
import Blog from "./Blog.js";

function App() {
	return (
		<Router basename="/iblind">
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/blog" component={Blog} />
			</div>
		</Router>
	);
}

export default App;

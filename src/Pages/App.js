import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home.js";
import News from "./News.js";

function App() {
	return (
		<Router basename="/iblind">
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/news" component={News} />
			</div>
		</Router>
	);
}

export default App;

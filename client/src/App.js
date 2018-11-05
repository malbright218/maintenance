import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MovieList from "./pages/MovieList";
import MovieInfo from "./pages/MovieInfo";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => (
	<Router>
		<div>
			<Nav />
				<Route exact path="/" component={Home} />
				<Route path="/movielist" component={MovieList} />
				<Route path="/movieinfo" component={MovieInfo} />
				<Route exact path="/search" component={Search} />
			
		</div>
	</Router>
);

export default App;
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProfileList from "./pages/ProfileList";
import Home from "./pages/Home";


const App = () => (
	<Router>
		<div>
			<Nav />
				<Route exact path="/" component={Home} />
				<Route path="/profile" component={ProfileList} />
		</div>
	</Router>
);

export default App;
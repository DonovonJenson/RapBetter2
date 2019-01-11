import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./homePage/home.js";

export default class App extends React.Component{
	render(){
		return (
			<Switch>
				<Route
					exact
					path="/"
					component={HomePage}
				/>
			</Switch>
		);
	}

}
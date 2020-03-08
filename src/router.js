import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import pages 
import Inftofix from './pages/inftofix';
import Regex from './pages/regex';

export default function router() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact><Inftofix /> </Route>
				<Route path='/regex'><Regex /> </Route>
			</Switch>
		</Router>
	);
}
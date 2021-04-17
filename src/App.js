import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { registerNav } from './modules/navigation';

import './App.scss';

import MainPage  from './pages/main-page/main-page.component';
import CheatPage from './pages/cheat-page/cheat-page.components';
import Footer    from './components/footer/footer.component';


const App = () => {
	let rootUrl = process.env.PUBLIC_URL;
	
	return (
		<div className="App">
			<Router ref={registerNav}>
				<Switch>
					<Route exact path={`${rootUrl}`} component={MainPage} />
					<Route path={`${rootUrl}/:name`} component={CheatPage} />
					<Redirect to={`${rootUrl}`} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};


export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { registerNav } from './modules/navigation';

import './App.scss';

import MainPage  from './pages/main-page/main-page.component';
import CheatPage from './pages/cheat-page/cheat-page.components';
import Footer    from './components/footer/footer.component';


const App = () => {
	return (
		<div className="App">
			<Router ref={registerNav}>
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route path='/:name' component={CheatPage} />
					<Redirect to='/' />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};


export default App;
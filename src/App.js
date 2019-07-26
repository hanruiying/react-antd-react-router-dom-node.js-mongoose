import React from 'react';
import Login from './pages/login/login.js';
import Admin from './pages/admin/admin.js';
import './assets/css/iconfont.css';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
class App extends React.Component{
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Login}></Route>
					<Route path='/admin' component={Admin}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;

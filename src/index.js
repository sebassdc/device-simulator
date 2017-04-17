import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Style} from 'radium';
import Main from './Main';

ReactDOM.render(
	<Router>
	<div>
		<Style rules={{
			body: {
				display: "flex",
				height: "1vh",
			}
		}}/>
		<Route exact path="/" component={Main}/>
	</div>
</Router>, document.getElementById('root'));

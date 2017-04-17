import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, hashHistory} from 'react-router';
import Main from './Main';

ReactDOM.render(
	<Router history={hashHistory}>
		<IndexRoute component={Main} />
	</Router>,
  document.getElementById('root')
);

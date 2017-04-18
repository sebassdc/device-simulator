import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Style} from 'radium';
import Main from './components/Main';
import DeviceCreator from './components/DeviceCreator';
import DeviceConector from './components/DeviceConector';


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
		<Route path="/device_creator" component={DeviceCreator}/>
		<Route path="/device_conector" component={DeviceConector}/>

	</div>
</Router>, document.getElementById('root'));

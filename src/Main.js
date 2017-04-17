import React, {Component} from 'react';
import Radium from 'radium';
import Button from './components/Button';

class Main extends Component {
	render() {
		return (
				<Button>Hello</Button>
		);
	}
}
Main = Radium(Main)
export default Main;

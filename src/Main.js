import React, {Component} from 'react';
import Radium from 'radium';
import Button from './components/Button';

let styles = {
	base: {
		height: "80vh",
		width: "80vw",
		marginTop: "30px",
		display: "flex",
		alignItems: "center",
		flexGrow: 1
	}
}

class Main extends Component {
	render() {
		return (
			<div style={styles.base}>
				<Button>Crea un nuevo dispositivo!</Button>
				<Button>Conecta un dispositivo</Button>
			</div>
		);
	}
}
Main = Radium(Main)
export default Main;

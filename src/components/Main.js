import React, {Component} from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import Button from './Button';

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
				<Link to="/device_creator">
					<Button>¡Crea un nuevo dispositivo!</Button>
				</Link>
				<Link to="/device_conector">
					<Button>Conecta un dispositivo</Button>
				</Link>
			</div>
		);
	}
}
Main = Radium(Main)
export default Main;

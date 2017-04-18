import React, {Component} from 'react';
import Radium from 'radium';
import BackArrow from './BackArrow';

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

class DeviceConector extends Component {
	render() {
		return (
			<div style={styles.base}>
				<BackArrow/>
				<h1>DeviceConector</h1>
			</div>
		);
	}
}
DeviceConector = Radium(DeviceConector)
export default DeviceConector;

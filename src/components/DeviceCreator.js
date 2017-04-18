import React, {Component} from 'react';
import Radium from 'radium';
import BackArrow from './BackArrow';
import FormDeviceCreate from './FormDeviceCreate';

let styles = {
	base: {
		height: "80vh",
		width: "80vw",
		marginTop: "30px",
		display: "flex",
		alignItems: "flex-start",
		flexGrow: 1,
		flexDirection: "column",
	}
}

class DeviceCreator extends Component {
	render() {
		return (
			<div style={styles.base}>
				<BackArrow/>
				<h1 style={{
						margin: '10%',
					}}>DeviceCreator</h1>
				<FormDeviceCreate/>
			</div>
		);
	}
}
DeviceCreator = Radium(DeviceCreator);
export default DeviceCreator;

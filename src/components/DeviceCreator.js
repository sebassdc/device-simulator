import React, {Component} from 'react';
import Radium from 'radium';
import BackArrow from './BackArrow';
import formDeviceCreate from './formDeviceCreate';

let styles = {
	base: {
		height: "80vh",
		width: "80vw",
		marginTop: "30px",
		display: "flex",
		alignItems: "flex-start",
		flexGrow: 1
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
				<formDeviceCreate/>
			</div>
		);
	}
}
DeviceCreator = Radium(DeviceCreator);
export default DeviceCreator;

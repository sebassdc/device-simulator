import React, {Component} from 'react';
import Radium from 'radium';

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

class formDeviceCreate extends Component {
	render() {
		return (
			<div>
				<form>
					
				</form>
			</div>
		);
	}
}
formDeviceCreate = Radium(formDeviceCreate);
export default formDeviceCreate;

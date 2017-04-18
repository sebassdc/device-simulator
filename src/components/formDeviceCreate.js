import React, {Component} from 'react';
import Radium from 'radium';

let styles = {
	base: {
		width: '50px',
	}
}

class formDeviceCreate extends Component {
	render() {
		return (
			<div style={[styles.base, this.props.style]}>
				<form>
					<input label="name" placeholder="Nombre"></input>
				</form>
			</div>
		);
	}
}
formDeviceCreate = Radium(formDeviceCreate);
export default formDeviceCreate;

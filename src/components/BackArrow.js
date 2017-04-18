import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import back_arrow from '../assets/back_arrow.png';

const positionStyles = {
	base: {
		alignSelf: "flex-start",
	}
}

const sizeStyles = {
	base: {
		width: "2vh",
		padding: "1vh 2vh",
	}
}

const styles = {
	base: {
		backgroundColor: 'transparent',
		border: 0,
		borderRadius: '2px',
		transition: "backgroundColor 1s",

		':hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
			transition: "backgroundColor 1s ease-in-out",
		},

		':active': {
			backgroundColor: 'rgba(#ffffff, 0)',
			transform: 'translateY(2px)'
		}
	},
};


class Back_arrow extends Component {
	render() {
		return (
			<div style={[
				styles.base,
				this.props.style,
				positionStyles.base
			]}>
			<Link to="/">
				<img role="presentation" src={back_arrow} style={[sizeStyles.base]}>

				</img>
			</Link>
			</div>
		);
	}
}

export default Radium(Back_arrow);

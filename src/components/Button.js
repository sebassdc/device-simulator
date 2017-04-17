import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
	base: {
		alignItems: "center",
		marginRight: "5px",
		marginLeft: "5px",
		fontSize: 16,
		backgroundColor: '#0074d9',
		color: '#fff',
		border: 0,
		borderRadius: '0.3em',
		padding: '0.4em 1em',
		cursor: 'pointer',
		outline: 'none',

		':hover': {
			backgroundColor: '#0088FF'
		},

		':focus': {
			backgroundColor: '#0088FF'
		},

		':active': {
			backgroundColor: '#005299',
			transform: 'translateY(2px)'
		}
	},

	red: {
		backgroundColor: '#d90000',

		':hover': {
			backgroundColor: '#FF0000'
		},
		':focus': {
			backgroundColor: '#FF0000'
		},
		':active': {
			backgroundColor: '#990000'
		}
	}
};


class Button extends Component {
	render() {
		return (
				<button onClick={this.props.onClick} style={[
					styles.base, this.props.color === 'red' && styles.red,
					this.props.style
				]}>
					{this.props.children}
				</button>
		);
	}
}

export default Radium(Button);

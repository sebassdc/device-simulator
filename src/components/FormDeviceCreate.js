import React, {Component} from 'react';
import Button from './Button';
import Radium from 'radium';
// import { ipcRenderer } from 'electron';
const ipc = window.require('electron').ipcRenderer

ipc.on('gen-device-and-driver-reply', (event, arg) => {
	console.log(arg);
	setTimeout(()=>{}, 3000);
});

let styles = {
	base: {
		display: "flex",
		alignSelf: "flex-start",
		flexDirection: "column",
		marginLeft: "50px"
	},
	item: {
		marginBottom: "15px"
	}
}

class FormDeviceCreate extends Component {
	genDeviceAndDriver() {
		ipc.send('gen-device-and-driver' ,{...this.state}
);
	}

	render() {
		return (
			<form style={[styles.base, this.props.style]}>
				<div style={styles.item}>
					<label>Nombre:
					</label>
					<input placeholder="Ej:Teclado" value={this.state.name}></input>
				</div>
				<div style={styles.item}>
					<label>Marca:
					</label>
					<input placeholder="Ej:Genius" value={this.state.marca}></input>
				</div>
				<div style={styles.item}>
					<label>¿Bloquea entrada y salida?
					</label>
					<input type="checkbox" value={this.state.bloqueaE_S}></input>
				</div>
				<div style={styles.item}>
					<label>¿Soporta byte stream access?
					</label>
					<input type="checkbox" value={this.state.accesoByteStream}></input>
				</div>
				<div style={styles.item}>
					<label>Descripcion de uso:
					</label>
					<textarea type="text" value={this.state.descripccion}></textarea>
				</div>
				<Button onClick={this.genDeviceAndDriver}>Generar Dispositivo y Controlador</Button>
			</form>
		);
	}
}
FormDeviceCreate = Radium(FormDeviceCreate);
export default FormDeviceCreate;

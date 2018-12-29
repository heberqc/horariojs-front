import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>Atrás</li>
					<li>HorarioJS</li>
					<li>Configuración</li>
				</ul>
			</nav>
		)
	}
}

export default NavBar;
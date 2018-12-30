import React, { Component } from 'react';
import { Layout } from 'antd';
import './NavBar.scss';

const { Header } = Layout;

class NavBar extends Component {
	render() {
		return (
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#711610' }}>
				<h1 style={{ textAlign: 'center', color: 'white', fontWeight: '900' }}>Generador de horarios</h1>
			</Header>
		)
	}
}

export default NavBar;
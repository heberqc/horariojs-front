import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class CurrentStep extends Component {
	render() {
		return (
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Ingresar datos</Breadcrumb.Item>
				<Breadcrumb.Item>Seleccionar cursos</Breadcrumb.Item>
				<Breadcrumb.Item>Generar de horarios</Breadcrumb.Item>
				<Breadcrumb.Item>Filtrar horarios</Breadcrumb.Item>
			</Breadcrumb>
		)
	}
}

export default CurrentStep;

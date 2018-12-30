import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class AppFooter extends Component {

	openLink(text, link) {
		return <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
	}

	render() {
		return (
			<Footer style={{ width: '100%', textAlign: 'center' }}>
				Heber Quequejana ({this.openLink('@heberqc','https://github.com/heberqc')}) - 2019
			</Footer>
		)
	}
}

export default AppFooter
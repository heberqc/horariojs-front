import React, { Component } from 'react';
import NavBar from './component/NavBar';
import CurrentStep from './component/CurrentStep';
import AppFooter from './component/AppFooter';
import Steps from './component/Steps';
import { Layout } from 'antd';

import './App.scss';
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    }
  }
  
  render() {
    return (
      <Layout>
        <NavBar />
        <Content style={{ padding: '0 50px', marginTop: 64 , marginBottom: 'auto' }}>
          <CurrentStep step={this.state.step}/>
          <Steps step={this.state.step}/>
        </Content>
        <AppFooter />
      </Layout>
    );
  }
}

export default App;

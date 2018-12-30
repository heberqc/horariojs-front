import React, { Component } from 'react';
import './App.scss';
import NavBar from "./component/NavBar";
import CurrentStep from "./component/CurrentStep";
import { Layout } from 'antd';

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Content style={{ padding: '0 50px', marginTop: 64 , marginBottom: 'auto' }}>
          <CurrentStep />
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe necessitatibus, atque alias
            laudantium nostrum, veritatis dignissimos quae perferendis debitis quod voluptate in nulla numquam
            ratione, soluta officiis illo nihil!
          </div>
        </Content>
        <Footer style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;

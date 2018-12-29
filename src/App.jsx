import React, { Component } from 'react';
import './App.scss';
import NavBar from "./component/NavBar";
import { Layout } from 'antd';

const {
  Header, Footer, Content,
} = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;

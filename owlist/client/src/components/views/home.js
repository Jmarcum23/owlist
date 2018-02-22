import React, { Component } from "react";
import NavBar from '../h-navbar';
import Header from '../h-header';
import Content from '../h-content';


class Home extends Component {
render() {
    return (
      <div className="Home">
        <NavBar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default Home;

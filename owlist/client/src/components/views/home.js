import React, { Component } from "react";
import NavBar from '../h-navbar';
import Header from '../h-header';

class Home extends Component {
render() {
    return (
      <div className="Home">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default Home;

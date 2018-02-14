import React, { Component } from "react";
import SideBar from '../d-sidebar';
import MainContent from '../d-maincontent';



class Dashboard extends Component {
render() {
    return (
      <div className='Dashboard'>
		<div className='row no-gutters'> 
		<SideBar /> 
		<MainContent />
		</div>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import SideBar from '../d-sidebar';
import NotifMainContent from '../d-notif-maincontent';

class Notifications extends Component {
render() {
    return (
      <div>
		<SideBar /> 
		<NotifMainContent />
      </div>
    );
  }
}

export default Notifications;

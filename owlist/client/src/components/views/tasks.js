import React, { Component } from "react";
import SideBar from '../d-sidebar';
import TaskMainContent from '../d-task-maincontent';

class Tasks extends Component {
render() {
    return (
      <div>
		<SideBar /> 
		<TaskMainContent />
      </div>
    );
  }
}

export default Tasks;

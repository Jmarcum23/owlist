import React from "react";

const TaskBar = (props) => {

	return(
		<section id="task-bar">
			{/*Need to setup this h3 below to bring in current project name that user is viewing, if no projects default to "My Personal Tasks" */}
			<h3 className="dk-blue-header section-header pt-3">Project Name Here</h3>
			<ul id="task-nav">
				{/*My Tasks li needs to display contentleft/TaskList*/}
				<li><a href="" className="active">My Tasks</a></li>
				{/*Calendar li needs to display contentleft/GoogleCalendar*/}
				<li><a href="">Calendar</a></li>
			</ul>
		</section>
	);
};




export default TaskBar;
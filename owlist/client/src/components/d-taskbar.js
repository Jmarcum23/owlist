import React from "react";

const TaskBar = (props) => {

	return(
		<section id="task-bar">
			<h3 className="dk-blue-header section-header pt-3">My Personal Tasks</h3>
			<ul id="task-nav">
				<li><a href="" className="active">List</a></li>
				<li><a href="">Calendar</a></li>
			</ul>
		</section>
	);
};




export default TaskBar;
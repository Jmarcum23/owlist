import React from "react";


const TaskList = (props) => {

	return(
		<div>
		<div id="add-task">
			<button type="button" className="btn btn-primary m-3" data-toggle="modal" data-target="#add-task-modal">Add Task</button>
		</div>
		<ul id="task-list">
			<li><a href="">Task Example 1</a></li>
			<li><a href="">Task Example 2</a></li>
			<li><a href="">Task Example 3</a></li>
		</ul>
		</div>
	);
};




export default TaskList;
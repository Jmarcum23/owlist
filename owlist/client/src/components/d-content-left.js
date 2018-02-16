import React from "react";
import TaskList from './d-task-list';

const ContentLeft = (props) => {

	return(
		<section id="main-content-left" className="col">
			<TaskList />
		{/*
		ContentLeft will default to TaskList when user logs in.

		If Notifications is clicked on the top nav
		then it will display <Notifications /> - Need to setup component still

		If Calendar is clicked in the taskbar
		then it will display <GoogleCalendar /> - Need to setup component still
		*/}
		</section>
	);
};




export default ContentLeft;
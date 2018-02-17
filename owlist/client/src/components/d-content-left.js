import React from "react";
import TaskList from './d-task-list';
import GoogleCalendar from './d-google-calendar';
import NotificationsList from './d-notifications-list'

const ContentLeft = (props) => {

	return(
		<section id="main-content-left" className="col mt-4">
		{/*
		ContentLeft will default to TaskList when user logs in.

		If Notifications is clicked on the top nav
		then it will display <NotificationsList /> 

		If Calendar is clicked in the taskbar
		then it will display <GoogleCalendar />
		*/}


		<TaskList />
		{/*<NotificationsList />*/}
		{/*<GoogleCalendar />*/}
		
		</section>
	);
};

export default ContentLeft;
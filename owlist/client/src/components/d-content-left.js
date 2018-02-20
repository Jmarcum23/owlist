import React, { Component } from 'react';
import TaskList from './d-task-list';
import GoogleCalendar from './d-google-calendar';
import NotificationsList from './d-notifications-list'
 

import {
  Route, Switch
} from 'react-router-dom'

class ContentLeft extends Component {

	render(){
	return(
		<section id="main-content-left" className="col mt-4">
		{/*
		ContentLeft will default to TaskList when user logs in.

		If Notifications is clicked on the top nav
		then it will display <NotificationsList /> 

		If Calendar is clicked in the taskbar
		then it will display <GoogleCalendar />
		*/}
		
		<Switch>
		<Route exact path="/dashboard/tasks" component={TaskList}/>
        <Route exact path="/dashboard/notifications" component={NotificationsList}/>
        <Route exact path="/dashboard/calendar" component={GoogleCalendar}/>
       	</Switch>

	
		
		</section>
	);
};
}


export default ContentLeft;
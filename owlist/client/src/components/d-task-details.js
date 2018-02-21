import React, { Component } from 'react';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import PaperclipIcon from 'react-icons/lib/fa/paperclip';


class TaskDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {ProjectName: 'Default'}
	}
	render(){
	return(
		<div id="task-pane">
		<div id="add-task">
			<ul id="task-details">
				{/*Pull in username/display name that task is assigned to here*/}
				<li>User Name Here</li>

				<li className="">
				<CalendarIcon size={23} color={'#605ca9'}/>
				<input type="date" name="dueDate"  className="task-date form-control" />
				</li>
				
				<li className="file-chooser">
	                <input type="file" className="form-control-file chooser" id="addAttachment2" />
	                <a href="#"><PaperclipIcon size={23} color={'#605ca9'}/></a>
              	</li>
			</ul>
		</div>
		<div className="task-details-content p-3">

			{/*Break out below into component */}
			<h3 className="dk-blue-header">{this.state.ProjectName}</h3>
			
			{/*Break out below into component */}
			<p>Task description here</p>
			<hr />

			{/*Break out below into component */}
			<p>Task attachments here</p>
			<hr />

			{/*Break out below into component */}
			<ul>
				<li>show comments that have been made here</li>
			</ul>


		</div>
		<div className="comment-section p-3">
			{/*Break out below into component */}
			<form>
			<textarea className="form-control" id="taskDescriptionTextarea2" placeholder="Write a comment..." rows="3"></textarea>
			 <button type="submit" className="btn btn-primary full-width">Submit</button>
            </form>
		</div>

		</div>
	);
};
}




export default TaskDetails;
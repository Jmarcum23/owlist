import React from "react";
import ContentLeft from './d-content-left';
import ContentRight from './d-content-right';


const Content = (props) => {
	if(!ContentRight) {
		
	}

	return(
		<div className="row no-gutters">
			<ContentLeft />
			<ContentRight />
		</div>
	);
};




export default Content;
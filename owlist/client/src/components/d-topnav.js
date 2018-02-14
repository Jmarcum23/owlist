import React from "react";

const TopNav = (props) => {

	return(
		<section id="top-nav-bar">
			<ul id="top-nav-left">
				<li><a href="">My Tasks</a></li>
				<li><a href="">Notifications</a></li>
			</ul>
			<ul id="top-nav-right">
				<li><a href="">User Name</a></li>
				<li><a href="">Profile Settings</a></li>
			</ul>
		</section>
	);
};




export default TopNav;
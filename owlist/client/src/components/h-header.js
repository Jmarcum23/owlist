import React from "react";
import PhoneImg from '../images/owlist-phone-2.png';




const Header = (props) => {

	return(
		<header id="index-header">
		<div className="container">
			<div className="row mb-5">
				<div className="col-sm-6 col-md-6 col-lg-6">
					<h1 id="header-h1" >Project management made easy.</h1>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
				<img className="img-fluid mt-4 ml-5 p-3" src={PhoneImg} alt='Phone Img' width={500}/>

				</div>
			</div>
		</div>
	</header>
	);
};

export default Header;
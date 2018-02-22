import React from "react";
import UiImg from '../images/owlist-ui.png';
import CompImg from '../images/owlist-computer.png';


const Content = (props) => {

	return(
		<section>
		<div className="container">
			<div className="row mt-5 mb-5 track-projects">
				<div className="col-sm-12 col-md-7 col-lg-7 mt-5 mb-5">
					<img className="img-fluid mt-3" src={UiImg} alt='Ui Img'/>
				</div>
				<div className="col-sm-12 col-md-5 col-lg-5 mt-4 mb-5">
					<h1 className="top-level-home pt-5">Track projects from start to finish</h1>
					<h4 className="second-level-home">
					Assign and keep track of the entire team's progress with ease.
					</h4>
				</div>
			</div>
		</div>
		<div className="wrapper mt-5" id="home-computer">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-6">
						<h1 className="top-level-home white">Seeing the bigger picture</h1>
						<h4 className="second-level-home white">
						Keeping organized is a crucial part of running successful projects. With Owlist, we make that process easier.
						</h4>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row mt-5 mb-5">
				<div className="col-sm-12 col-md-12 col-lg-12 mt-5 mb-5">
					<h1 className="purple-header section-header">Get Started Today!</h1>
					<p className="text-center">There's no better time than now.</p>
					<p className="text-center"><a href="#" className="btn btn-lg btn-primary" data-toggle="modal" data-target="#signup-modal">Signup</a></p>
	
				</div>
			</div>
		</div>
		<footer>
	</footer>
	</section>
	);
};

export default Content;
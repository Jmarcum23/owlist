import React from "react";
import GoogleIcon from 'react-icons/lib/fa/google';
import LoginForm from './l-login-form'



const LoginContent = (props) => {

	return(
		<div className="row">
  			<div id="login" className="col-sm-8 col-md-6 col-lg-6 offset-sm-2 offset-md-3 offset-lg-3">
  				<div id="login-logo" className="d-block mr-auto ml-auto mb-5">
  				</div>
  				<button type="submit" className="btn btn-primary d-block mr-auto ml-auto"><GoogleIcon size={18}/> Use Google Account</button>
  				<div id="dialog-separator" className="mt-4 mb-4">
  					or
  				</div>
  				<LoginForm />
				<p id="signup">Don't have an account? <a href="#" data-toggle="modal" data-target="#signup-modal">Signup</a></p>
  			</div>
		</div> 
	);
};


export default LoginContent;
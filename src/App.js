import React from 'react';
import './App.css';
import Inputbox from "./inputbox";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: ''
		}
	}

	isValidEmail = (mail) => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return true;
		}
		
		return false;
	}

	handleSubmit = (e) => {
		let firstName = this.state.firstname;
		let lastName = this.state.lastname;
		let email = this.state.email;
		let password = this.state.password;

		e.preventDefault();
		if (firstName === '' || /^([^0-9]*)$/.test(firstName) === false) {
			alert('First Name not valid');
			return;
		}

		if (lastName === '' || /^([^0-9]*)$/.test(lastName) === false) {
			alert('Last name not valid');
			return;
		}

		if (this.isValidEmail(email) === false) {
			alert('Email id not valid');
			return;
		}

		if (password.length < 8) {
			alert('Password Must be at least 8 characters long');
			return;
		}

		if (/^[0-9a-zA-Z]+$/.test(password) === false) {
			alert('Only numbers (0-9) and letters (A-Z, a-z) are allowed for password')
			return;
		}
	}

	render() {
		return (
			<section className="container">
				<h2>Get started today!</h2>
				<form className="form">
					<Inputbox label='First Name' type='text' onChange={(e) => this.setState({'firstname': e.target.value})} value={this.state.firstname} />
					<Inputbox label='Last Name' type='text' onChange={(e) => this.setState({'lastname': e.target.value})} value={this.state.lastname} />
					<Inputbox label='Email address' type='email' onChange={(e) => this.setState({'email': e.target.value})} value={this.state.email} />
					<Inputbox label='Password' type='password' onChange={(e) => this.setState({'password': e.target.value})} value={this.state.password} />
					<div className="button-container">
						<button type="submit" onClick={this.handleSubmit}>claim your free trial</button>
						<div>you are agreeing to our <a href="#">Terms and services</a></div>
					</div>
				</form>
			</section>
		);
	}
}

export default App;

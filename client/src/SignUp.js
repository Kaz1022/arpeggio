import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
      first_name: '',
      last_name: '',
			username: '',
			email: '',
			password: '',
			password_confirmation: '',
			registrationErrors: '',
			picture: '',
      city: '',
      country: '',
      phone: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
	}

  handleFirstNameChange = (e) => {
		this.setState({
			first_name: e.target.value,
		});
	}

  handleLastNameChange = (e) => {
		this.setState({
			last_name: e.target.value,
		});
	}

	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value,
		});
	}

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value,
		});
	}

	handlePasswordChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	}

	handleAvatarChange = (e) => {
		this.setState({
			picture: e.target.files[0],
		});
	}

  handleCityChange = (e) => {
		this.setState({
			city: e.target.value,
		});
	}

  handleCountryChange = (e) => {
		this.setState({
			country: e.target.value,
		});
	}

  handlePhoneChange = (e) => {
		this.setState({
			phone: e.target.value,
		});
	}

	handleSubmit = (e) => {

		axios.post("https://localhost:3000/api/signup", {
			user: {
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				username: this.state.username,
				email: this.state.email,
				password: this.password,
				password_confirmation: this.password_confirmation,
				picture: this.picture,
				city: this.city,
				phone: this.phone,
				country: this.country
			}
		},
		{ withCredentials: true }
		).then(response => {
			console.log("registration res", response);
		}).catch(error => {
			console.log("registration error", error);
		})
		e.preventDefault();
	}


render() {
  return (
	  <form onSubmit={this.handleSubmit}>
		  <h1>Sign up form</h1>
				<input
          onChange={this.handleFirstNameChange}
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          />

					<input
          onChange={this.handleLastNameChange}
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          />

				<input
          onChange={this.handleUsernameChange}
          type="text"
          name="username"
          placeholder="Username"
          required
          />

        <input
          onChange={this.handleEmailChange}
          type="email"
          name="email"
          placeholder="Email"
					value={this.state.email}
          required
        />
          
        <input
          onChange={this.handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
					value ={this.state.password}
          required
			/>
			
        <input
          onChange={this.handleAvatarChange}
          type="file"
          accept="/images/*"
        />   
        <input
          onChange={this.handleCityChange}
          type="text"
          name="city"
          placeholder="city"
          required
			/>

        <input
          onChange={this.handleCountryChange}
          type="text"
          name="country"
          placeholder="country"
          required
			/>

        <input
          onChange={this.handlePhoneChange}
          type="text"
          name="phone"
          placeholder="phone"
          required
			/>

        <button type="submit">
          Create Account
        </button>
    </form>
		);
	}
}
export default Signup;

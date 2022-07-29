import React, { Component } from 'react';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
      first_name: '',
      last_name: '',
			username: '',
			email: '',
			password: '',
			picture: '',
      city: '',
      country: '',
      phone: ''
		};
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

render() {
  return (
	  <form onSubmit={this.onSubmitHandler}>
		  <h1>{message}</h1>
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
          required
        />
          
        <input
          onChange={this.handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
          required
			/>
			
        <input
          onChange={this.handleAvatarChange}
          type="file"
          accept="/images/*"
        />      
        <button type="submit">
          Create Account
        </button>
    </form>
		);
	}
}
export default Signup;

import React, { Component } from 'react';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			picture: '',
		};
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

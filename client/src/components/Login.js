import React, { Component } from 'react';
import '../scss/signup.scss';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			handle: '',
			password: '',

		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleHandleChange = (e) => {
		this.setState({
			handle: e.target.value,
		});
	}

  handlePasswordChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	}

	handleSubmit = (e) => {
    console.log("submitted")

	}

render() {
  return (
    <>
    <NavigationBar></NavigationBar>
		<div className="base-container">
		<div className="header"><h1>Log in</h1></div>
		<div className="content">
			<div className="form">
    		<div className="form-group">
	  			<form onSubmit={this.handleSubmit}>
		  
				<input
          onChange={this.handleHandleChange}
          type="text"
          name="handle"
          placeholder="Username"
          required
          />

					<input
          onChange={this.handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
          required
          />

        <button type="submit">
          Login
        </button>
    </form>
		</div>
		</div>
		</div>
		</div>
    <Footer></Footer>
    </>
		);
	}
}
export default Login;

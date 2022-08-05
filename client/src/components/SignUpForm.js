import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../scss/signup.scss';

function SignUpFrom (props) {

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
	const [handle, setHandle] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("")

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		console.log("Submitted SignUp Form!")
		e.preventDefault()
		const data = new FormData();
		data.append("post[first_name]", e.target.first_name.value);
		data.append("post[last_name]", e.target.last_name.value);
		data.append("post[handle]", e.target.handle.value);
		data.append("post[email]", e.target.email.value);
		data.append("post[password]", e.target.password.value);
		data.append("post[password_confirmation]", e.target.password_confirmation.value);
		data.append("post[city]", e.target.city.value);
		data.append("post[country]", e.target.country.value);
		data.append("post[phone]", e.target.phone.value);
		data.append("post[profile_image]", e.target.profile_image.files[0]);
		submitToAPI(data);
	}

	const submitToAPI = (data) => {
		axios.post("/api/signup", {data},{ withCredentials: true })
		.then(response => {
					console.log(response);
					if (response.data.status === 'created') {
							console.log("signup POST is successful. response data:", response.data);
							props.handleLogin(response.data);
							navigate('/events');
					}
        }).catch(error => {
            console.log("registration error", error)
        })
	}	
	
	return (
		<>
		{props.loggedInStatus === "LOGGED_IN" ? (
      <div className="base-container">
        <div className="header">
          <h1>You're logged in!</h1>
          <p>
            <a href="/">Go to Home</a>
          </p>
        </div>
      </div>
    ) : (
		<div className="base-container">
			<div className="header"><h1>Sign up form</h1></div>
				<div className="content">
					<div className="form">
						<div className="form-group">
							<form onSubmit={(e) => handleSubmit(e)}>
								<input
									type="text"
									name="first_name"
									placeholder="First Name"
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
									required
									/>

									<input
									type="text"
									name="last_name"
									placeholder="Last Name"
									value={lastName}
									onChange={e => setLastName(e.target.value)}

									required
									/>

								<input
									type="text"
									name="handle"
									placeholder="Username"
									value={handle}
									onChange={e => setHandle(e.target.value)}
									required
									/>

								<input
									type="email"
									name="email"
									placeholder="Email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
									
								<input
									type="password"
									name="password"
									placeholder="Password"
									value ={password}
									onChange={e => setPassword(e.target.value)}
									required
							/>

								<input
									type="password"
									name="password_confirmation"
									placeholder="Password Conformation"
									value ={passwordConfirmation}
									onChange={e => setPasswordConfirmation(e.target.value)}
									required
							/>
							
								<input
									type="file"
									name="profile_image"
									placeholder="Profile Picture"
									value ={profileImage}
									onChange={e => setProfileImage(e.target.value)}
									required
								/>   
								<input
									type="text"
									name="city"
									placeholder="city"
									value ={city}
									onChange={e => setCity(e.target.value)}
									required
							/>

								<input
									type="text"
									name="country"
									placeholder="country"
									value ={country}
									onChange={e => setCountry(e.target.value)}
									required
							/>

								<input
									type="text"
									name="phone"
									placeholder="phone"
									value ={phone}
									onChange={e => setPhone(e.target.value)}
									required
							/>

								<button type="submit">
									Create Account
								</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		)}
	</>
	);
}

export default SignUpFrom;

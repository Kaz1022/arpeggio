import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewEvent (props) {

	const [title, setTitle] = useState("")
	const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
	const [level, setLevel] = useState("")
  const [venue, setVenue] = useState("")
  const [genre, setGenre] = useState("")
  const [eventImage, setEventImage] = useState("")
  const [description, setDescription] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		console.log("Submitted new event!")
		axios.post("/api/signup",
            {
                events: {
										title: title,
										city: city,
                    country: country,
										level: level,
                    venue_style: venue,
                    genre: genre,
										event_image: eventImage,
										description: description,
										event_date: eventDate,
										start_time: startTime,
                    end_time: endTime,
                }
            },
            { withCredentials: true }
        ).then(response => {
					console.log(response);
					if (response.data.status === 'created') {
							console.log("event POST is successful. response data:", response.data);
							props.handleLogin(response.data);
							navigate('/events');
					}
        }).catch(error => {
            console.log("event creation error", error)
        })
    e.preventDefault()
	}
	
	return (
		<div className="base-container">
			<div className="header"><h1>Organize a new session!</h1></div>
				<div className="content">
					<div className="form">
						<div className="form-group">
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									name="title"
									placeholder="Title"
									value={title}
									onChange={e => setTitle(e.target.value)}
									required
									/>

									<input
									type="text"
									name="city"
									placeholder="City"
									value={city}
									onChange={e => setCity(e.target.value)}

									required
									/>

								<input
									type="text"
									name="country"
									placeholder="Country"
									value={country}
									onChange={e => setCountry(e.target.value)}
									required
									/>

								<input
									type="text"
									name="level"
									placeholder="Level"
									value={level}
									onChange={e => setLevel(e.target.value)}
									required
								/>
									
								<input
									type="text"
									name="Genre"
									placeholder="Genre"
									value ={genre}
									onChange={e => countrysetGenre.target.value)}
									required
							/>

								<input
									type="text"
									name="description"
									placeholder="Event Description"
									value ={description}
									onChange={e => setDescription(e.target.value)}
									required
							/>
							
								<input
									type="file"
									name="event_image"
									placeholder="Event Picture"
									value ={eventImage}
									onChange={e => setEventImage(e.target.value)}
									required
								/>   
								<input
									type="date"
									name="event_date"
									placeholder="Event Date"
									value ={eventDate}
									onChange={e => setEventDate(e.target.value)}
									required
							/>

								<input
									type="time"
									name="start_time"
									placeholder="Event Start Time"
									value ={startTime}
									onChange={e => setStartTime(e.target.value)}
									required
							/>

								<input
									type="time"
									name="end_time"
									placeholder="Event End Time"
									value ={endTime}
									onChange={e => setEndTime(e.target.value)}
									required
							/>

								<button type="submit">
									Create a new event
								</button>
						</form>
					</div>
				</div>
			</div>
		</div>

	);
}

export default NewEvent;

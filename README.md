Arpeggio
=========
Arpeggio is a simple web app where a user can post a music session, and others see the available spots and apply to attend the session. It is built with React for front-end, Ruby on Rails for back-end, PostgreSQL for database and Twilio API. 

This is our final group project at LighthouseLabs and we are proud that we accomplished creating a web app with Rails which was relatively new to us.

### Users can ...
- register, log-in and logout with their account 
- browse and filter events 
- favorite items to check up on them later or unlike them
- reserve a spot by clicking an icon which sends a text to the organizer of the event
- create sessions which can be seen by others
- accept the applicant by clicking the icon +
- cancel the applicant and make the spot available again 

# Final Product
## HOME PAGE
![filtering]()
## BROWSE EVENTS 
![mylisting]()

## LIKE/UNLIKE EVENTS 
## RESERVE YOUR SPOT
![favourite]()
## ACCEPT/CANCEL APPLICANT 

## Getting Started
1. Fork this repository and clone it onto your local device.
2. Install dependencies on your root directory using the `bundle install` command for back-end. 
3. From client directory, run `npm install` for front-end.
4. Create config/database.yml by copying config/database.example.yml
5. Run `rails db:reset` to create, load and seed db
6. Create .env file based on .env.example
7. Sign up for a Twilio account
8. Put Twilio id and auth token into appropriate .env vars
5. 
5. The app will be served at <http://localhost:8080/>.
6. Go to <http://localhost:8080/> in your browser.

❗️For the purpose of the demo, we are ommiting user login/logout function.

❗️To login as a user1, please go to <http://localhost:8080/api/users/login/1> .

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- Chalk　2.4.2　
- Cookie-session 2.0.0 
- Dayjs 1.11.1
- Dotenv 2.0.0
- EJS 3.1.7
- Express 4.17.1
- Morgan 1.9.1
- PG 8.5.0
- SASS 1.35.1

## A Note on Non-Stock image assets
Some of the listing images were pulled from non-stock photos since this project is for educational purposes. If you want to look into how to purchase those items for yourself, their sources can be found online [here](https://imgur.com/a/FR0UqzY)

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
- accept the applicant by clicking the icon
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
![favourite]()

## Getting Started
1. Fork this repository and clone it onto your local device.
2. Install dependencies on your root directory using the `bundle install` command for back-end. 
3. From client directory, run `npm install` for front-end.
4. Create config/database.yml by copying config/database.example.yml
5. Run `rails db:reset` to create, load and seed db
6. Create .env file based on .env.example
7. Sign up for a Twilio account
8. Put your Twilio SID, Auth Token and Phone Number into appropriate .env vars
9. Run `rails s` to start the back-end server 
10. Run `npm start --prefix client` to start the app.
11. The app will be served at <http://localhost:4000/>.
12. Go to <http://localhost:4000/> in your browser.

## Dependencies
- React ^18.2.0
- React Bootstrap　
- Styled Components ^5.3.5
- Timeago ^7.1.0
- Rails 7.0.3
- Twilio-Ruby
- Dotenv 
- PostgreSQL 9.x


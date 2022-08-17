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
![homegif2](https://user-images.githubusercontent.com/90123125/185229847-5aab5d2f-9fe5-440e-8b99-8cd626cac453.gif)

## BROWSE EVENTS 
![browse](https://user-images.githubusercontent.com/90123125/185230117-401ab6e0-8f19-4c07-bcbb-f534a559b369.gif)

## RESERVE YOUR SPOT
![reserve](https://user-images.githubusercontent.com/90123125/185230348-18d0c996-4442-43a8-80d2-b61d530ae638.gif)

## ACCEPT/CANCEL APPLICANT 
![acceptcancel](https://user-images.githubusercontent.com/90123125/185230381-d6756d35-b486-4d43-8aef-2bdf3b04051a.gif)


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


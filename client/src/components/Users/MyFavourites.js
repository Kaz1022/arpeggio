import { React } from 'react';
import '../../scss/custom.scss';
import '../../App.scss';


function MyFavourites(props) {

 return (
  <>
   {props.loggedInStatus === 'NOT_LOGGED_IN' ? (
    <div className="header">
     <div className="header">
      <h1>YOU NEED TO LOGIN FIRST!</h1>
      <p>
       <a href="/login">Go to LOGIN</a>
      </p>
     </div>
    </div>
   ) : (
    <h1>MY FAVOURITES</h1>
   )}
  </>
 );
}

export default MyFavourites;

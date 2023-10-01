import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  console.log(auth.currentUser);

  const navigate = useNavigate();

  function onLogout() {
    auth.signOut().then(() => onLogout());
    navigate("/loggedout");
  }

  const [user, setUser] = useState(null);
  let email = auth.currentUser.email;

  let displayName = auth.currentUser.displayName;

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  console.log("current user details are below:", email, user);

  let providerId = auth.currentUser.providerId;
  let lastLogIn = auth.currentUser.metadata.lastSignInTime;

  return (
    <div className='profilePage'>
      <div className="profileText" style={{
        display: 'grid',
        paddingBottom: '5cm',
        paddingLeft: '2cm',
        position: 'centre',
        background: 'mintcream',
        wordWrap: 'wrap',
        color: 'black',
        fontSize: '10pt'
      }}>
        <h1 style={{ fontSize: '40pt' }}>Thank you for logging in from the {providerId} database</h1>
        <h1 style={{ color: 'green', textDecoration: 'underline', textAlign: 'center' }}>{email}</h1>
        <h2 style={{ textAlign: 'center' }}>Your last login attempt was {lastLogIn}</h2>
        <h2>Specifications - You need to deploy and host your DEV@Deakin app with Netlify or Heroku and submit the link to your app. Please note that Heroku is not free anymore. - You need to complete authentication feature by adding the signout feature to the login page.</h2>
        <h1>So now you know that... Go ahead and LOG OUT...</h1>
        <br></br>
        <button type="submit" onClick={onLogout}>HERE</button>
      </div>
    </div>
  );
}

export default Profile;

import { GoogleLogout } from "react-google-login";
import React from 'react';
import { useNavigate } from "react-router-dom";
import './LogoutPage.css'

const clientId = '763923841073-0b529ug54trhi229rughqbfq67a1g24n.apps.googleusercontent.com';

export const LogoutPage = () => {

  const navigate = useNavigate();

    const onSuccess = () => {
        console.log('Logout Successful')
        navigate('/')
      }

  return (
    <div id="signOutButton">
    <GoogleLogout clientId={clientId} buttonText={'Logout'} onLogoutSuccess={onSuccess}>

    </GoogleLogout>
    </div>
  )
}


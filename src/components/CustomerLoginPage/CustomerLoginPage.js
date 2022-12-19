import React from 'react';
import { Header } from '../Header/Header';
import { LoginPage } from '../LoginPage/LoginPage';

export const CustomerLoginPage = () => {
  return (<>
    <Header/>
 <div className="topTrainerLoginContainer">

  <div className='TrainerLoginMainContainer'>
  <h1 className="TrainerLoginHeading">Login to find Trainers & slots!</h1>
  <div className="down-arrow"></div>
  <div className='LoginPageComponent'><LoginPage/></div>  
  </div>
 
 </div></>
)
}


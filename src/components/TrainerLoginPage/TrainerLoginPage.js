import React from 'react';
import {LoginPage} from '../LoginPage/LoginPage';
import {Header} from '../Header/Header';
import './TrainerLoginPage.css'

export const TrainerLoginPage = () => {
  return (<>
      <Header/>
   <div className="topTrainerLoginContainer">

    <div className='TrainerLoginMainContainer'>
    <h1 className="TrainerLoginHeading">Login To Schedule New Slots</h1>
    <div className="down-arrow"></div>
    <div className='LoginPageComponent'><LoginPage/></div>  
    </div>
   
   </div></>
  )
}
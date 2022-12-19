import React from 'react';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import gymLogo from '../../assets/gymIcon.png';
import {LogoutPage} from '../LogoutPage/LogoutPage';
import {Main} from '../Main/Main';

import './TrDashboard.css';



export const TrDashboard = () => {
 
  const loggedInUser = useSelector((state)=> {return state.loggedInUser})
  
  
  return (
       <>
            <div className='headerMainContainer'>
      <NavLink to={'/'}> <img className='gymIconMain' src={gymLogo} alt="gymLogo" /></NavLink>
      <h1 className='trainerMainHeading'>Trainer's Dashboard</h1>
      <div className="loginItems">
      <NavLink><h5>LoggedinAs <span style={{color:'red'}}>{loggedInUser}</span> </h5></NavLink>
      <NavLink><h5><LogoutPage/></h5></NavLink>
      </div>
    </div>

    <Main/>
       </>
    

  )
}
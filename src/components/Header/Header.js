import React from 'react';
import './Header.css';
import { NavLink} from 'react-router-dom';
import gymLogo from '../../assets/gymIcon.png'

export const Header = () => {

  return (
    <div className='headerMainContainer'>
      <NavLink to={'/'}> <img className='gymIconMain' src={gymLogo} alt="gymLogo" /></NavLink>
      <h1 className='trainerMainHeading'>Training Scheduler</h1>
      <div className="loginItems">
      <NavLink to={'/trainerloginpage'}><h5>Trainer's Login</h5></NavLink>
      <NavLink to={'/customerloginpage'}><h5>Student's Login</h5></NavLink>
      </div>

    </div>
  )
}


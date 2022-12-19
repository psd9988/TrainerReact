import React from 'react';
import './CsDashboard.css';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import gymLogo from '../../assets/gymIcon.png'
import {LogoutPage} from '../LogoutPage/LogoutPage';
import {Main} from '../Main/Main'

export const CsDashboard = () => {
  const displayName = useSelector((state)=> {return state.displayName})
  const loggedInUser = useSelector((state)=>{return state.loggedInUser})

  return (
    <>
    <div className='headerMainContainer'>
      <NavLink to={'/'}> <img className='gymIconMain' src={gymLogo} alt="gymLogo" /></NavLink>

      <h1 className='trainerMainHeading'>Customer's Dashboard</h1>

      <div className="loginItems">
      <NavLink><h5>LoggedinAs <span style={{color:'red'}}>{loggedInUser}</span> </h5></NavLink>
      <NavLink><h5><LogoutPage/></h5></NavLink>
      </div>
    </div>
    <Main/>
    </>
  )
}
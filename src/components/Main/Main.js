import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import './Main.css';
import { useSelector } from 'react-redux';
import { ShowTrainers } from '../ShowTrainers/ShowTrainers';
import { ShowSubClasses } from '../ShowSubClasses/ShowSubClasses';


export const Main = () => {

  function generateLinkFunc() {
    setLink(`https://meet.google.com/ndw-wbhr-uoc`)
}

const [link, setLink] = useState('')

  const showTrainers = useSelector((state)=> state.showTrainers)
  const mySubscriptions = useSelector((state)=> state.mySubscriptions)

  const localStorageEvent = JSON.parse(localStorage.getItem("classes") || "[]");
  const [events, setEvents] = useState(localStorageEvent);

  function mynewFunc(mouseEnterInfo) { console.log((mouseEnterInfo.event._def)) }

  // function renderEventContent(eventInfo) {
  //  console.log(eventInfo.event.title);
  // }


  const location = useLocation();

  // Trainer page Main content below:-

  if (location.pathname == '/trdashboard') {
    return (<>
      <div className='ContainerOfMain'>

        <Sidebar events={events} setEvents={setEvents} />

        

        <div className='googlelinkContainer'>
        <h2>Hello Trainer, </h2>
        <h4>Welcome to the Training Scheduler</h4>
        <p>You can create slots for your students and each student can book one slot for each class</p>
        <p>Important:- You can cannot have more than 5 students</p>
        <button className='googlelinkContainerbutton' onClick={generateLinkFunc}>Create Link</button>
        <h3>Google Link:- </h3> 
        <h3>{link}</h3> 
    </div>




       
      </div>
      <div className="fullcalendarComponent">

<FullCalendar
  plugins={[dayGridPlugin]}
  initialView='dayGridMonth'
  events={events}
  eventMouseEnter={mynewFunc}

/>
</div>
</>
    )
  }

  // Customer page Main content below:-
  else if (location.pathname == '/csdashboard') {
    return (

      <div className='CsContainerOfMain'>
        <Sidebar events={events} setEvents={setEvents} />

        <div className='customerTableData'>
        {showTrainers? <ShowTrainers/>: ''}
        {mySubscriptions? <ShowSubClasses/>: ''}
        
       
        </div>

      </div>
    )
  }

  // Home page main below:-

  else if (location.pathname == '/') {
    return (
      <div className='ContainerOfMain'>
      <div className='mainPageTextContainer'>
      <h1 className='headingOfHomePage'>Welcome to the Training Scheduler</h1>
        <p>Please login from Trainer login if you are a trainer, else select student login. Best of luck for you fitness journey!</p>
      </div>
      </div>
    )
  }


}


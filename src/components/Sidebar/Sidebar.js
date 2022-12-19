import React, { useState, useContext } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';
import gymImage from '../../assets/gymImage.jpg'
import { MyContexts } from '../MyContexts/MyContexts';


export const Sidebar = ({ events, setEvents }) => {

const { myClassList } = useContext(MyContexts);

  var today = new Date().toISOString().split('T')[0];
  const [myTitle, setMyTitle] = useState('Full Body Workout');
  const [myDate, setMyDate] = useState(new Date().toISOString().slice(0, 10));
  const location = useLocation();
  const dispatch = useDispatch();
  const trainerName = useSelector((state)=> state.displayName);
  // Modifying


  var newClass = {
    id: Math.floor(Math.random() * 1000000),
    title: myTitle,
    date: myDate,
    trainerName,
    studentsEnrolled:0
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (myTitle.trim() && myDate.trim()) {

      var classes = JSON.parse(localStorage.getItem("classes") || "[]");
      
      setEvents([...events, newClass])
      
      classes.push(newClass);
       
      // Saving
      localStorage.setItem("classes", JSON.stringify(classes));
      
    }
    
  }

  // Trainer page Main content below:-

  if (location.pathname=='/trdashboard') {

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className='ContainerOfSidebar'>

            <label className='SidebarHeadings' htmlFor="Class">Select Class</label>

                <select onChange={e => setMyTitle(e.target.value)} className='SidebarHeadings selectClass' name="Class" id="Class">
              {myClassList.map((myClass)=>{return <option value={myClass}>{myClass}</option>})}
                </select>

            <h5 className='SidebarHeadings'>timings</h5>

            <input value={myDate} min={today} className='SidebarHeadings inputDate' type="date" name="" id="" onChange={e => setMyDate(e.target.value)} />

            <h5 className='SidebarHeadings'>Number of Students</h5>
 
            <h5 className='SidebarHeadings'>{events.length>0 ? events.map(i=>i.studentsEnrolled).reduce((a,b)=>a+b): 0}</h5>

            <button className='SidebarHeadings'>Submit</button>

            <img className='gymImage' src={gymImage} alt="gymImage" />

          </div>
        </form>

      </>
    )
  }
  else if (location.pathname=='/csdashboard') { 
    return (
      <>
      <div className='ContainerOfSidebar'>
        <h5 onClick={()=>dispatch({type:'TrainerClicked'})} className='SidebarHeadings'>Trainers</h5>
        <h5 onClick={()=>dispatch({type:'subscribedClassesClicked'})} className='SidebarHeadings'>Classes Available</h5>
        <img className='gymImage' src={gymImage} alt="gymImage" />
      </div>
      </>
    )
  }
}

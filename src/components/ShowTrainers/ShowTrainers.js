import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export const ShowTrainers = () => {
  const [trainer, setTrainer] = React.useState([]);
  const [classes, setClasses] = React.useState([]);
  const [classToShow, setClassToShow] = React.useState([]);
  const [bookedSlot, setBookedSlot] = React.useState([]);
  const customerId = useSelector((state) => state.uid)
  
  useEffect(() => {
    var classs = JSON.parse(localStorage.getItem("classes") || "[]");
    var bookedSlots = JSON.parse(localStorage.getItem('book') || "[]");
    setBookedSlot([...bookedSlots]);
    let arr = [];
    for (let i = 0; i < classs.length; i++) {
      arr.push(classs[i].trainerName);
    }
    setTrainer([...new Set(arr)]);
    setClasses([...classs]);
  }, []);
  var checkUser = (classss) => {
    for (let i = 0; i < bookedSlot.length; i++) {
      if (bookedSlot[i].classID == classss.id && bookedSlot[i].customerId == customerId) {
        return true;
      }
    }
    return false;
  };
  var handleSelect = (e) => {
    let arr = [];
    for (let i = 0; i < classes.length; i++) {
      let checkUsers = checkUser(classes[i]);
      if (classes[i].trainerName === e.target.value && classes[i].studentsEnrolled < 5 && !checkUsers) {
        arr.push(classes[i]);
      }
    }
    setClassToShow([...arr]);
  };

  const bookSlots = (e) => {
    console.log("hello2");
    for (let i = 0; i < classes.length; i++) {
      let checkUsers = checkUser(classes[i]);
      if (classes[i].id == e.target.id && classes[i].studentsEnrolled < 5 && !checkUsers) {
        console.log("hello");
        classes[i].studentsEnrolled++;
        bookedSlot.push({
          customerId,
          classID: classes[i].id,
        });
      }
    }
    setBookedSlot([...bookedSlot]);
    localStorage.setItem('book', JSON.stringify(bookedSlot));
    setClasses([...classes])
    localStorage.setItem('classes', JSON.stringify(classes));
  }

  return (
    <>
      <h3 style={{ margin: '1rem 0 1rem 0' }}>Hi There, Please choose a Trainer to book slots below:</h3>

      <label htmlFor="Trainers">Choose a Trainer:</label>

      <select name="Trainers" id="Trainers" onClick={handleSelect}>
        {
          trainer.map((ele, index) =>
          (
           <option key={index} value={ele}>{ele}</option>
          )
          )
        }
      </select>

      <div>
        {
          classToShow.map((ele, index) =>
          (
            <div key={index}>
              <h1>{ele.title}</h1>
              <p>{ele.date}</p>
              <button id={ele.id} onClick={bookSlots}>Book a slot</button>
            </div>
          )
          )
        }
      </div>
    </>
  )
}


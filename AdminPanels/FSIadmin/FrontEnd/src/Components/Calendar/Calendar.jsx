// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';


// mock data
const Available =[
  new Date(2024,8,21),
  new Date(2024,8,28),
  new Date(2024,9,11),
];
const completeAvailable = new Date(2024, 9, 12);
// mock data ends

const isSameDate = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
function CalendarComp() {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    const ate = new Date();
    const date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate())

    if (view === 'month'){
      if(date.getFullYear()< ate.getFullYear()) return 'grey';
      if(date.getFullYear() === ate.getFullYear() && date.getMonth() < ate.getMonth()) return 'grey';
      if(date.getFullYear() === ate.getFullYear() && date.getMonth() === ate.getMonth() && date.getDate() < ate.getDate()) return 'grey';
      
      if (date.getDate() === ate.getDate() && date.getMonth() === ate.getMonth()) {
        return 'current-day';
      }
      if (date.getDay() === 0) {
        return 'weekend-day';
      }
      if(date2 > completeAvailable || Available.some(date => isSameDate(date, date2))){
        return 'available-day';
      }
    }
  };



  const onChange = (newDate) => {
    const date2 = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
    if(date2 > completeAvailable || Available.some(date => isSameDate(date, date2))) setDate(newDate);
    return;
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <Calendar
        onChange={onChange}
        value={date}
        tileClassName={tileClassName}
      />
      <p>Selected date: {date.toDateString()}</p>
      <button className='schedule-button' onClick={()=>{
        alert(`Inspection Scheduled for : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
      }}>Schedule for this date ?</button>
    </div>
  );
}

export default CalendarComp;

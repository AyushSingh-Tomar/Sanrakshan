import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Schedule.css'
import CalendarComp from '../Calendar/Calendar.jsx';
import Modal from '../Modal/Modal.jsx';
import Card from '../InspectorCard/Card.jsx';

//mock data
const numberOfInspector = 9;
const Inspectors = [
  {
    name : "pranshul",
    title : "swe",
    image : "https://via.placeholder.com/150",
    description:"John is a skilled software engineer with 5 years of experience in full-stack development."
  },
  {
    name : "pranshul",
    title : "swe",
    image : "https://via.placeholder.com/150",
    description:"John is a skilled software engineer with 5 years of experience in full-stack development."
  },
  {
    name : "pranshul",
    title : "swe",
    image : "https://via.placeholder.com/150",
    description:"John is a skilled software engineer with 5 years of experience in full-stack development."
  },
  {
    name : "pranshul",
    title : "swe",
    image : "https://via.placeholder.com/150",
    description:"John is a skilled software engineer with 5 years of experience in full-stack development."
  }
];
// mock data ends

function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='ScheduleFSI second-color'>
      <div className='HeadFSI first-color'>Schedule an Inspection</div>

      <div className='InspectorArea third-color'>
        <div className='InspectorNumber'>
          Number of Inspectors Available : {numberOfInspector}
          <div className='InspectorView'>view available inspectors
          <button onClick={openModal}>view</button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Inspector Details</h2>
            <div className="card-container">
              {
                Inspectors.map((data)=>{
                  return <Card {...data}/>
                })
              }
            </div>
          </Modal>
          </div>
        </div>
      </div>

      <div className='calender'>
        <CalendarComp/>
      </div>
    </div>
  )
}

export default Schedule
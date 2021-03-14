import './App.css';
import {useState} from 'react' 
import React from 'react'
import Header from './Components/Header';
import Events from './Components/Events';
import AddEvent from './Components/AddEvent';

const App = () => {
  const [showAddEvent,setShowAddEvent] = useState(false)
  const [events,setEvents] = useState([
    {
        id:1,
        name:"Nptel",
        status:"winner",
        location:"PSG",
        date:"22-02-2021",
    },
    {
        id:2,
        name:"Avantaa",
        status:"winner",
        location:"SKCT",
        date:"10-01-2021",
    },
    {
        id:3,
        name:"Sports",
        status:"winner",
        location:"PSG",
        date:"11-11-2020",
    }
  ])
  // Delete Values
  const onDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id ))
  }
  // Add Event
  const addEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newEvent = {id,...event}
    setEvents([...events,newEvent])
  }
  return (
    <div className="container mt-5">
      <Header title="Add Your Events Here!." onAdd={()=>setShowAddEvent(!showAddEvent)} showAdd={showAddEvent}/>
      {showAddEvent && <AddEvent onAddEvent={addEvent} />}
      {events.length > 0?(<Events events={events} onDelete = {onDelete} edit={edit} />):("No Events Are Added")}
    </div>
  )
}

export default App;

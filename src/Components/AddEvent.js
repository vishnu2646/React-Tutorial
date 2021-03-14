import React from 'react'
import { useState } from 'react'

const AddEvent = ({onAddEvent}) => {
    const [name,setName] = useState('')
    const [status,setStatus] = useState('')
    const [date,setDate] = useState('')
    const [location,setLocation] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAddEvent({name,status,date,location})

        setName('')
        setStatus('')
        setDate('')
        setLocation('')
        
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Add Event" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Status" value={status} onChange={(e) => setStatus(e.target.value)} required/>
            </div>
            <div className="form-group">
                <input type="date" className="form-control" placeholder="Enter Event Date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Event Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
            </div>
            <input className="btn btn-block" value="Save Event" type="submit" />
        </form>
    )
}

export default AddEvent

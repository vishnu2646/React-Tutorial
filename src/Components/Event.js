import React from 'react'
import {FaTrash} from 'react-icons/fa';

const Event = ({event,onDelete}) => {
    return (
        <div className="event">
            <h5>
                {event.name} <FaTrash className="fa" style={{ color:'red',float: "right" }} onClick={() => onDelete(event.id)}/>
            </h5>
            <p>{event.status} <span style={SpanStyle} className="text-muted ml-2">Contducted On: {event.date}</span></p>
            <h6>{event.location}</h6>
        </div>
    )
}
const SpanStyle = {
    fontSize:14
}
export default Event

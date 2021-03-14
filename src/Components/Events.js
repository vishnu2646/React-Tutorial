import Event from './Event';

const Events = ({events,onDelete,edit}) => {
    return (
        <>
           {events.map((event)=>(
               <Event key={event.id} event={event} onDelete={onDelete} edit={edit}/>
           ))} 
        </>
    )
}
export default Events;
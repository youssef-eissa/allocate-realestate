import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
function CalendarPage() {
  const localizer = momentLocalizer(moment)
  const [CalendarEvents, setEvents] = useState<any>([])

  
    const handleSelectSlot = useCallback(
    ({ start  , end } : any) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEvents((prev : any) => [...prev, { start, end, title }])
      }
        
    },
    [setEvents]
    )
    const handleSelectEvent = useCallback(
    (event: any) => { window.alert(event.title);console.log(event);
    },
    []
    )
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2,type: "spring" }}className='container'>
      <div className='row'>
      <Calendar
      localizer={localizer}
      events={CalendarEvents}
      startAccessor="start"
      endAccessor="end"
          style={{ height: 500 }}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
    />
      </div>
    </motion.div>
  )
}

export default CalendarPage
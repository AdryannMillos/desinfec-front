import React, {useEffect, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import axios from "axios";

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

const Schedule = ({tMonth, tYear}) => {
    const [events, setEvents] = useState([]);
    let authToken = localStorage.getItem("authToken");

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_BASE_URL}/customer-historic/list`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .then((response) => {
            const data =  response.data.map((item) => {  
                item.title = 'Evento' + item.id
                item.start = item.initialDate
                item.end = item.finalDate
                return item
              })
            //   const options = {
            //     timeZone: "America/Sao_Paulo",
            //     day: "2-digit",
            //     month: "2-digit",
            //     year: "numeric",
            //     hour: "2-digit",
            //     minute: "2-digit",
            //     second: "2-digit",
            //   };
              
            //   const brazilianInitialDate = initialDate.toLocaleString("pt-BR", options);
            //   const brazilianFinalDate = finalDate.toLocaleString("pt-BR", options);
            setEvents(data);
            console.log(data)
          })
          .catch((error) => {
            // Handle error
          });
      }, []);

    return (
    <div>
     <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={events}
      />
    </div>
  )
}
 
export default Schedule;
import React, {useState, useEffect} from "react";
import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment";
import axios from "axios";


const appointmentList = Object.values(appointments).map((appointment) => {
  return (
    <Appointment key={appointment.id} {...appointment} />
  )
});

export default function Application(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  })

  const setDay = day => setState({...state, day});
  const setDays = days => setState(prev => ({ ...prev, days }));

  useEffect(() => {
    axios.get('http://localhost:8001/api/days')
      .then(response => {
        setDay(response.data);
        setDays(response.data);
      })
      .catch(err => console.log(err))
  }, []);


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

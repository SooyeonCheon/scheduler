import React, {useState, useEffect} from "react";
import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";


export default function Application(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  // const dailyAppointments = [];
  let dailyAppointments = getAppointmentsForDay(state, state.day);
  console.log(dailyAppointments);
  const setDay = day => setState({...state, day});

  const appointmentList = dailyAppointments.map((appointment) => {
    return (
      <Appointment key={appointment.id} {...appointment} />
    )
  });

  
  // const setDays = days => setState(prev => ({ ...prev, days }));

  // useEffect(() => {
  //   axios.get('http://localhost:8001/api/days')
  //     .then(response => {
  //       setDay(response.data);
  //       setDays(response.data);
  //     })
  //     .catch(err => console.log(err))
  // }, []);
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days:all[0].data, appointments:all[1].data}))
    });
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

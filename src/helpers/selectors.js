export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter(d => d.name === day)[0];
  if(!selectedDay) {
    return [];
  }

  const appointmentArr = selectedDay.appointments;

  const appointments = appointmentArr
    .filter(id => state.appointments[id])
    .map(id => state.appointments[id]);
  
  return appointments;

}




const interviewers = {
  "1": {  
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  },
  "2": {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png"
  }
};

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

export function getInterview(state, interview) {
  if (!interview) return null;

  const interviewerInfo = interviewers[interview.interviewer];
  console.log("interviewerInfo", interviewerInfo);
  interview.interviewer = interviewerInfo;
  console.log("interview", interview);

  return interview;
}
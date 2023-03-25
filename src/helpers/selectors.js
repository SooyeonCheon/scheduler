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
  const filteredDays = state.days.filter(d => d.name === day);
  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }

  //get the appointments
  const appointmentsFromDays = filteredDays[0].appointments;
 
  let filteredAppointments = [];
 
  for(let appointment of appointmentsFromDays) {
    filteredAppointments.push(state.appointments[appointment]);
  }
  return filteredAppointments;
}

export function getInterview(state, interview) {
  const output = {};
  if (interview) {
    output["student"] = interview.student;
    output["interviewer"] = state.interviewers[interview.interviewer];
  } else {
    return null;
  }
  return output;
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day);
  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }

  //get interviwers for the days
  const interviewersFromDays = filteredDays[0].interviewers;
 
  let filteredInterviewers = [];

  for(let interviewer of interviewersFromDays) {
    filteredInterviewers.push(state.interviewers[interviewer]);
  }
  return filteredInterviewers;
}
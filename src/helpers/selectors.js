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
  const output = [];
  for (const elem of state.days) {
    if (elem.name === day) {
      for (const appt of elem.appointments) {
        if (state.appointments[appt]) {
          output.push(state.appointments[appt]);
        }
      }
    }
  }
  return output;
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
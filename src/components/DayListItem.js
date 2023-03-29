import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots===0
  });

  const formatSpots = () => {
    if (props.spots === 0) return "no spots remaining";
    else if (props.spots === 1) return "1 spot remaining";
    else {
      return `${props.spots} spots remaining`;
    }
  }


  return (
    <li className={dayClass} 
    selected={props.selected} 
    onClick={() => props.setDay(props.name)}
    data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}


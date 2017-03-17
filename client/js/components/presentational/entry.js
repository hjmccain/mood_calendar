import React from 'react';
import EditMenuContainer from '../container/edit_menu_container';
import moment from 'moment';

function Entry (props) {
  const { mood, id, text, date } = props.entry;

  const liClass = `user-entry ${mood}`;
  const capMood = mood.charAt(0).toUpperCase() + mood.slice(1)

  return (
    <li className={liClass} id={id} onMouseOver={props.onMouseOver}>
      <p className={'text'}>{text}</p>
      <p className={'mood-and-date'}>
        <span className={'mood'}>{capMood}</span>
        on
        <span className={'date'}>{moment(date).format('MMMM D, YYYY')}</span>
      </p>
      <EditMenuContainer id={id} mood={mood}/>
    </li>
  )
}

export default Entry;

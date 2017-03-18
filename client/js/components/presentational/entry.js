import React from 'react';
import EditMenuContainer from '../container/edit_menu_container';
import moment from 'moment';
import emotions from './emotions';

function Entry (props) {
  const { mood, id, text, date } = props.entry;

  const liClass = `user-entry ${mood}`;
  const capMood = mood.charAt(0).toUpperCase() + mood.slice(1)

  return (
    <li className={liClass} id={id} onMouseOver={props.onMouseOver}>
      <div className="date-and-mood">
        {emotions[mood]}
        <p className={'date'}>{moment(date).format('MMMM D, YYYY')}</p>
      </div>
      <p className={'text'}>{text}</p>
      <EditMenuContainer id={id} mood={mood}/>
    </li>
  )
}

export default Entry;

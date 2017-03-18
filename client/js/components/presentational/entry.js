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
      <p className={'date'}>{moment(date).format('MMMM D, YYYY')}</p>
      <p className={'text'}>{text}</p>
      <div className="mood-and-edit">
        {emotions[mood]}
        <EditMenuContainer id={id} mood={mood}/>
      </div>
    </li>
  )
}

export default Entry;

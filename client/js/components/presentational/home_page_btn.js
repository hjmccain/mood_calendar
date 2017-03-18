import React from 'react';
import { hashHistory } from 'react-router';
import RootContainer from '../container/root_container';

function HomePageBtn (props) {

  const callLink = (e) => {
    props.selectMood(null);
    hashHistory.push('/entries');
  }

  return (
    <button className={'cancel-button'} onClick={callLink}>
      {props.text}
    </button>
  )
}

export default HomePageBtn;

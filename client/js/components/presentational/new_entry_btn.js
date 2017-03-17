import React from 'react';
import { hashHistory } from 'react-router';

function NewEntryBtn () {
  function routeLink() {
    hashHistory.push('/new_entry');
  }

  return (
    <form className={'new-entry-form'}>
      <i className="fa fa-plus-square fa-2x" aria-hidden="true"></i>
      <button className={'new-entry-btn'} type="submit" onClick={routeLink}>
        New Entry
      </button>
    </form>
  )
}

export default NewEntryBtn;

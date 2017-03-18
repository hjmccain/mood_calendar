import React from 'react';
import { hashHistory } from 'react-router';
import NewEntryBtn from './new_entry_btn';
import MoodDropDown from './mood_drop_down';

class HeaderBar extends React.Component {
  constructor() {
    super();
    this.state = {
      moodInput: '',
      showText: true
    }
    this.sendMoodData = this.sendMoodData.bind(this);
    this.getMood = this.getMood.bind(this);
    this.callLink = this.callLink.bind(this);
  }

  sendMoodData(e) {
    e.preventDefault();
  }

  getMood(mood) {
    this.setState({ moodInput: mood });
  }

  callLink(e) {
    hashHistory.push('/');
  }

  showText(boolean) {
    this.setState({ showText: boolean })
  }

  render () {
    return (
      <div className={'header-bar'}>
        <h3 onClick={this.callLink} className={'moodoo'}>moodoo</h3>
        <MoodDropDown dropText={'All moods'} showText={this.showText.bind(this)} />
        <NewEntryBtn showText={this.state.showText}/>
      </div>
    )
  }
}

export default HeaderBar;

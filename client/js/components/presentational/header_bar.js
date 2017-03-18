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
    this.getMood = this.getMood.bind(this);
    this.callLink = this.callLink.bind(this);
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
    let filtersClass;
    if (this.props.showOptions) {
      filtersClass = "filters"
    } else {
      filtersClass = "filters hidden"
    }
    return (
      <div className={'header-bar'}>
        <h3 onClick={this.callLink} className={'moodoo'}>moodoo</h3>
        <div className={filtersClass}>
          <MoodDropDown dropText={''} showText={this.showText.bind(this)} image={'fa fa-filter fa-2x'}/>
          <NewEntryBtn showText={this.state.showText}/>
        </div>
      </div>
    )
  }
}

export default HeaderBar;

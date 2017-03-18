import React from 'react';
import { hashHistory } from 'react-router';
import HeaderBar from './header_bar';
import MoodDropDown from './mood_drop_down';
import TextArea from './textarea';
import EntrySubmission from './entry_submission';
import HomePageBtn from './home_page_btn';

class NewEntryForm extends React.Component {
  constructor() {
    super();
    this.state = {
      moodInput: '',
      textInput: '',
      confirmation: 'confirmation hidden'
    }
  }

  sendAddData(e) {
    e.preventDefault();
    const { textInput, moodInput } = this.state;
    if (!textInput) {
      alert('You didn\'t write anything! Jot down some feelings, or you can cancel.')
    } else if (!moodInput) {
      alert('How are you feeling? Choose a mood, then try submitting again.')
    } else {
      this.props.postNewEntry(textInput, moodInput)
      this.props.selectMood(null);
      this.setState({ confirmation: 'confirmation' })
    }
  }

  getInput(input) { this.setState({ textInput: input }) }
  getMood(mood) { this.setState({ moodInput: mood }) }

  render () {
    return (
      <div>
        <HeaderBar showOptions={false}/>
        <div className={'entry-form'}>
          <form onSubmit={this.sendAddData.bind(this)}>
            <div className="new-entry-top">
              <MoodDropDown
                getMood={this.getMood.bind(this)}
                displayText={'What\'s your mood?'}
                dropText={'hidden'}
                image={'fa fa-smile-o fa-2x'}
                />
            </div>
            <br />
            <TextArea default={''} getInput={this.getInput.bind(this)} />
            <br />
            <EntrySubmission />
          </form>
          <HomePageBtn text={'Cancel'} selectMood={this.props.selectMood.bind(this)} />
        </div>
        <div className={this.state.confirmation}>
          <p>We're posting your entry!</p>
          <button onClick={() => {hashHistory.push('/entries')}}>OK</button>
        </div>
      </div>
    )
  }
}

export default NewEntryForm;

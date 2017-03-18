import React from 'react';
import { hashHistory } from 'react-router';
import HeaderBar from './header_bar';
import TextArea from './textarea';
import MoodDropDown from './mood_drop_down';
import EntrySubmission from './entry_submission';
import HomePageBtn from './home_page_btn';

class EditEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodInput: '',
      textInput: ''
    }
  }

  sendEditData(e) {
    const { moodInput, textInput } = this.state;
    const { entry, id, editEntry } = this.props;
    e.preventDefault();
    if (!moodInput && !textInput) {
      alert('No edits were made, but we\'ll save your original post!');
    } else if (!moodInput) {
      editEntry(id, textInput, entry.mood)
    } else if (!textInput) {
      editEntry(id, entry.text, moodInput)
    } else {
      editEntry(id, textInput, moodInput)
    }
    this.props.selectMood(null);
    hashHistory.push('/entries');
  }

  getInput(input) { this.setState({ textInput: input }) }
  getMood(mood) { this.setState({ moodInput: mood }) }

  render () {
    return (
      <div>
        <HeaderBar />
        <div className={'entry-form'}>
          <form onSubmit={this.sendEditData.bind(this)}>
            <div className="new-entry-top">
              <MoodDropDown
                selectedMood={this.props.entry.mood}
                displayText={'What\'s your mood?'}
                getMood={this.getMood}
                dropText={'hidden'}
                image={'fa fa-smile-o fa-2x'}
                />
            </div>
            <br />
            <TextArea default={this.props.entry.text} getInput={this.getInput.bind(this)}/>
            <br />
            <EntrySubmission />
          </form>
          <HomePageBtn text={'Cancel'} selectMood={this.props.selectMood.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default EditEntryForm;

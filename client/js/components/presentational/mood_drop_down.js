import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/entries_actions';

class MoodDropDown extends React.Component {
  constructor(props) {
    console.log('mood drop down', props);
    super(props);
    this.state = {
      moodMenu: 'mood-dropdown-menu hidden',
      selectedMood: null
    }
    this.sendMood = this.sendMood.bind(this);
  }

  sendMood(mood) {
    let sendMood;
    mood ? sendMood = mood.toLowerCase() : sendMood = null;
    this.props.selectMood(sendMood);
    this.setState({
      selectedMood: mood || 'All moods',
      moodMenu: "mood-dropdown-menu hidden"
    });
  }

  toggleClass() {
    if (this.state.moodMenu === "mood-dropdown-menu hidden") {
      this.setState({
        moodMenu: "mood-dropdown-menu",
        selectedMood: null
      });
    } else {
      this.setState({ moodMenu: "mood-dropdown-menu hidden" });
    }
  }

  render () {
    return (
      <div className="mood-dropdown">
        <p className="mood-dropdown-default"
          onClick={this.toggleClass.bind(this)}>
          {this.state.selectedMood || 'Filter'}
        </p>
        <div className={this.state.moodMenu}>
          <p onClick={() => {this.sendMood(null)}}>All moods</p>
          <p onClick={() => {this.sendMood("Happy")}}>Happy</p>
          <p onClick={() => {this.sendMood("Excited")}}>Excited</p>
          <p onClick={() => {this.sendMood("Awkward")}}>Awkward</p>
          <p onClick={() => {this.sendMood("Ambivalent")}}>Ambivalent</p>
          <p onClick={() => {this.sendMood("Bored")}}>Bored</p>
          <p onClick={() => {this.sendMood("Sad")}}>Sad</p>
          <p onClick={() => {this.sendMood("Depressed")}}>Depressed</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    selectMood: (mood) => { dispatch(actions.selectMood(mood)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodDropDown);

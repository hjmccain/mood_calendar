import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/entries_actions';

class MoodDropDown extends React.Component {
  constructor(props) {
    console.log('mood drop down', props);
    super(props);
    this.state = {
      moodMenu: 'mood-dropdown-menu hidden',
      selectedMood: null,
      showText: true,
      text: ''
    }
    this.sendMood = this.sendMood.bind(this);
  }

  sendMood(mood) {
    let sendMood;
    mood ? sendMood = mood.toLowerCase() : sendMood = null;
    this.props.selectMood(sendMood);
    this.setState({
      showText: false,
      selectedMood: mood || 'All moods',
      moodMenu: "mood-dropdown-menu hidden"
    });
    this.props.showText(true);
  }

  toggleClass() {
    if (this.state.moodMenu === "mood-dropdown-menu hidden") {
      this.setState({
        moodMenu: "mood-dropdown-menu",
        selectedMood: null
      });
      this.props.showText(false);
    } else {
      this.setState({ moodMenu: "mood-dropdown-menu hidden" });
      this.props.showText(true);
    }
  }

  displayText() {
    if (this.state.showText) {
      if (this.state.text === '') {
        this.setState({ text: 'Filter moods' })
      } else {
        this.setState({ text: '' })
      }
    }
  }

  render () {
    return (
      <div className="mood-dropdown">
        <i
          className="fa fa-filter fa-2x"
          aria-hidden="true"
          onClick={this.toggleClass.bind(this)}
          onMouseOver={this.displayText.bind(this)} onMouseOut={this.displayText.bind(this)}
          ></i>
        <p className="display-text">{this.state.text}</p>
        <div className="mood-dropdown-default">
          <p>{this.state.selectedMood}</p>
        </div>
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

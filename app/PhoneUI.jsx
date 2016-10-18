import React, { PropTypes, Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PhoneTextArea from './PhoneTextArea.jsx';
import PhoneKeyboard from './PhoneKeyboard.jsx';
import PhoneCycleContainer from './PhoneCycleContainer.jsx';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';

class PhoneUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInputTextOptions : [],
      selectedInputOption : 0,
      currentInputNumber : "",
      finalText: ""
    }
    this.handleInputNumberChange = this.handleInputNumberChange.bind(this);
    this.handleSelectedOptionChange = this.handleSelectedOptionChange.bind(this);
  }

  handleInputNumberChange(newNumber) {
    const currentInputNumber = this.state.currentInputNumber;
    this.setState({
      currentInputNumber : currentInputNumber + newNumber
    });
  }

  handleSelectedOptionChange() {

  }

  render() {
    const containerStyle = {
      maxWidth: '400px'
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={containerStyle} >
          <AppBar title="T9 React" showMenuIconButton={false} />
          <PhoneTextArea inputText={this.state.currentInputNumber} />
          <PhoneCycleContainer 
            onSelectedOptionChange={this.handleSelectedOptionChange} />
          <PhoneKeyboard 
            onPhoneButtonClick={this.handleInputNumberChange} />
        </div>
      </MuiThemeProvider>
    )
  }
}

PhoneUI.propTypes = {

}

export default PhoneUI;

import React, { Component, PropTypes } from 'react';
import PhoneButton from './PhoneButton.jsx';
import Paper from 'material-ui/Paper';

class PhoneKeyboard extends Component {

  render() {
    const row = {
      display: 'flex',
      alignItems:'center',
      justifyContent: 'center'
    }

    return (
      <Paper zDepth={1} >
        <div style={row}>
          <PhoneButton num={1} text={""} handleNumBtnClick={this.props.onPhoneButtonClick} />
          <PhoneButton num={2} text={"abc"} handleNumBtnClick={this.props.onPhoneButtonClick} />
          <PhoneButton num={3} text={"def"} handleNumBtnClick={this.props.onPhoneButtonClick} />
        </div>
        <div style={row}>
          <PhoneButton num={4} text={"ghi"} handleNumBtnClick={this.props.onPhoneButtonClick} />
          <PhoneButton num={5} text={"jkl"} handleNumBtnClick={this.props.onPhoneButtonClick} />
          <PhoneButton num={6} text={"mno"} handleNumBtnClick={this.props.onPhoneButtonClick} />
        </div>
        <div style={row}>
          <PhoneButton num={7} text={"pqrs"} handleNumBtnClick={this.props.onPhoneButtonClick} />
          <PhoneButton num={8} text={"tuv"}  handleNumBtnClick={this.props.onPhoneButtonClick} />
          <PhoneButton num={9} text={"wxyz"} handleNumBtnClick={this.props.onPhoneButtonClick} />
        </div>
      </Paper>
    )
  }
}

PhoneKeyboard.propTypes = {
  onPhoneButtonClick : PropTypes.func.isRequired
}

export default PhoneKeyboard;

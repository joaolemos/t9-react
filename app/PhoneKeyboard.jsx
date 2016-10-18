import React, { Component, propTypes } from 'react';
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
          <PhoneButton num={1} text={""} />
          <PhoneButton num={2} text={"abc"} />
          <PhoneButton num={3} text={"def"} />
        </div>
        <div style={row}>
          <PhoneButton num={4} text={"ghi"} />
          <PhoneButton num={5} text={"jkl"} />
          <PhoneButton num={6} text={"mno"} />
        </div>
        <div style={row}>
          <PhoneButton num={7} text={"pqrs"} />
          <PhoneButton num={8} text={"tuv"} />
          <PhoneButton num={9} text={"wxyz"} />
        </div>
      </Paper>
    )
  }
}

export default PhoneKeyboard;

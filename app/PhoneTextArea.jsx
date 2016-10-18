import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class PhoneTextArea extends React.Component {
  render() {
    const style = {
      margin: '20px',
      width: '80%',
      border: '1px solid black'
    }

    const row = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return (
      <Paper zDepth={1}>
        <div style={row}>
          <TextField
            id="mainTextArea"
            multiLine={true}
            underlineShow={false}
            type="number"
            style={style}
            rows={4}
            rowsMax={8} />
        </div>
      </Paper>
    )
  }
}

export default PhoneTextArea;

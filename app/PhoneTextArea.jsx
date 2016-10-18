import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class PhoneTextArea extends Component {
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
            disabled={true}
            multiLine={true}
            underlineShow={false}
            type="number"
            style={style}
            rows={4}
            rowsMax={8} 
            value={this.props.inputText} />
        </div>
      </Paper>
    )
  }
}

PhoneTextArea.propTypes = {
  inputText: PropTypes.string.isRequired
}

export default PhoneTextArea;

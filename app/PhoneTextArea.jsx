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

    let finalText;
    if(this.props.previousText != "") {
      finalText = this.props.previousText + " " + this.props.inputText
    }
    else {
      finalText = this.props.inputText
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
            value={finalText} />
        </div>
      </Paper>
    )
  }
}

PhoneTextArea.propTypes = {
  previousText: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired
}

export default PhoneTextArea;

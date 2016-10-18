import React, { Component, propTypes } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class PhoneCycleContainer extends Component {

  render() {
    const row = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return (
      <Paper zDepth={1}>
        <div style={row}>
          <RaisedButton label="Cycle" style={{ margin: '20px' }} />
        </div>
      </Paper>
    )
  }
}

export default PhoneCycleContainer;

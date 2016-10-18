import React, { PropTypes, Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PhoneTextArea from './PhoneTextArea.jsx';
import PhoneKeyboard from './PhoneKeyboard.jsx';
import PhoneCycleContainer from './PhoneCycleContainer.jsx';
import AppBar from 'material-ui/AppBar';

class PhoneUI extends Component {
  render() {
    const containerStyle = {
      maxWidth: '400px'
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={containerStyle} >
          <AppBar title="T9 React" showMenuIconButton={false} />
          <PhoneTextArea />
          <PhoneCycleContainer />
          <PhoneKeyboard />
        </div>
      </MuiThemeProvider>
    )
  }
}

PhoneUI.propTypes = {

}

export default PhoneUI;

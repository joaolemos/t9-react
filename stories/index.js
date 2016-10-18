import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import PhoneButton from '../app/PhoneButton.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

storiesOf('PhoneButton', module)
  .addDecorator((getStory) =>(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      { getStory() }
    </MuiThemeProvider>
  ))
  .add('2 button', () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <PhoneButton num={2} text={"abc"} />
      </MuiThemeProvider>
  ))
 .add('3 button', () => (
    <PhoneButton num={3} text={"def"} />
  ))
 .add('4 button', () => (
    <PhoneButton num={4} text={"ghi"} />
  ))
 .add('5 button', () => (
    <PhoneButton num={5} text={"jkl"} />
  ))
 .add('6 button', () => (
    <PhoneButton num={6} text={"mno"} />
  ))
 .add('7 button', () => (
    <PhoneButton num={7} text={"pqrs"} />
  ))
 .add('8 button', () => (
    <PhoneButton num={8} text={"tuv"} />
  ))
 .add('9 button', () => (
    <PhoneButton num={9} text={"wxyz"} />
  ))
 .add('1 button', () => (
    <PhoneButton num={1}  />
  ))

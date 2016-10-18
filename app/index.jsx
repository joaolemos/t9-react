import React from 'react';
import ReactDOM from 'react-dom';
import PhoneUI from './PhoneUI.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<PhoneUI />, document.getElementById('app'));

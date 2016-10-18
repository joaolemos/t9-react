import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class PhoneButton extends Component {

  render() {
    const style = {
      margin: 12,
    };

    return (
      <RaisedButton label={this.props.num} style={style} />
    )
  }
}

PhoneButton.propTypes = {
  num: PropTypes.number.isRequired,
  text: PropTypes.string
}

export default PhoneButton;

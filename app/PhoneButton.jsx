import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class PhoneButton extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.handleNumBtnClick(this.props.num);
  }

  render() {
    const style = {
      margin: 12,
    };

    return (
      <RaisedButton 
        label={this.props.num} 
        style={style} 
        onClick={this.onButtonClick}
      />
    )
  }

}

PhoneButton.propTypes = {
  num: PropTypes.number.isRequired,
  handleNumBtnClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default PhoneButton;

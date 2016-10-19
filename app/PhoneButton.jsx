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
      <div>
        <RaisedButton 
          label={this.props.text} 
          style={style} 
          onClick={this.onButtonClick}
        >
          {this.props.num}
        </RaisedButton>
      </div>
    )
  }

}

PhoneButton.propTypes = {
  num: PropTypes.string.isRequired,
  handleNumBtnClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default PhoneButton;

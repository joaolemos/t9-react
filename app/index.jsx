import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>Hello ReactJS Skeleton!</div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import Today from './components/today.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" >
        <Today />
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('Main'));

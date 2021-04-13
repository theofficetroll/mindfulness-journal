import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

class Main extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route path="/" component={Home} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('Main'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home.jsx';
import RapidLog from './pages/rapidLog.jsx';
import Daily from './pages/daily.jsx';

class Main extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route path='/rapid' component={RapidLog} exact={true} />
            <Route path='/daily' component={Daily} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('Main'));

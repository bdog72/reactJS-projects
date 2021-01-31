//
//

import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Practice from './projects/0-practice/Practice';
import BirthdayReminder from './projects/1-birthday-reminder/src/BirthdayReminder';

export default function App() {
  return (
    <Router>
      <div>
        <div className='App__a'>
          <Link to='/'>Home</Link>
          <Link to='/practice'>0 - Practice</Link>
          <Link to='/birthday-reminder'>1 - Birthday Reminder</Link>
        </div>

        <hr />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/practice'>
            <Practice />
          </Route>

          <Route path='/birthday-reminder'>
            <BirthdayReminder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

//
//

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './index.scss';

import BirthdayReminder from './projects-1-2-3/1-birthday-reminder/setup/src/App';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <div className='basicexample__link-container'>
          <Link to='/birthday-reminder'>Birthday Reminder</Link>
          <Link to='/about'>About</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>

        {/* <hr /> */}

        <Switch>
          <Route exact path='/birthday-reminder'>
            <BirthdayReminder />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

//
//

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BirthdayReminder from './projects/1-birthday-reminder/src/BirthdayReminder';

export default function App() {
  return (
    <Router>
      <div>
        <div className='app__link-container'>
          <Link to='/birthday-reminder'>1 - Birthday Reminder</Link>
          <Link to='/about'>About</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard'>5 - Bozo</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>

        {/* <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul> */}

        <hr />

        <Switch>
          <Route exact path='/birthday-reminder'>
            <BirthdayReminder />
          </Route>
          {/* <Route path='/about'>
            <About />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

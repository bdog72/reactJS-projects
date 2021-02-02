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
          <Link to='/about'>2 - About</Link>
          <Link to='/dashboard'>3 - Dashboard</Link>
          <Link to='/dashboard'>4 - Dashboard</Link>
          <Link to='/dashboard'>5 -Dashboard</Link>
          <Link to='/dashboard'>6 - Dashboard</Link>
          <Link to='/dashboard'>7 - Dashboard</Link>
          <Link to='/dashboard'>8 - Dashboard</Link>
          <Link to='/dashboard'>9 - Dashboard</Link>
          <Link to='/dashboard'>10 - Dashboard</Link>
          <Link to='/dashboard'>11 - Dashboard</Link>
          <Link to='/dashboard'>12 - Dashboard</Link>
          <Link to='/dashboard'>13 - Dashboard</Link>
          <Link to='/dashboard'>14 - Dashboard</Link>
          <Link to='/dashboard'>15 - Dashboard</Link>
        </div>
        <hr />
        <hr />
        <hr />
        <hr />
        <div className='app__link-container'>
          <div className='item'>
            <Link to='/birthday-reminder'>1 - Birthday Reminder</Link>
            <Link to='/about'>2 - About</Link>
            <Link to='/dashboard'>3 - Dashboard</Link>
          </div>
          <div className='item'>
            <Link to='/dashboard'>4 - Dashboard</Link>
            <Link to='/dashboard'>5 -Dashboard</Link>
            <Link to='/dashboard'>6 - Bozo</Link>
          </div>
          <div className='item'>
            <Link to='/dashboard'>7 - Dashboard</Link>
            <Link to='/dashboard'>8 - Dashboard</Link>
            <Link to='/dashboard'>9 - Dashboard</Link>
          </div>
          <div className='item'>
            <Link to='/dashboard'>10 - Dashboard</Link>
            <Link to='/dashboard'>11 - Dashboard</Link>
            <Link to='/dashboard'>12 - Dashboard</Link>
          </div>
          <div className='item'>
            <Link to='/dashboard'>13 - Dashboard</Link>
            <Link to='/dashboard'>14 - Dashboard</Link>
            <Link to='/dashboard'>15 - Dashboard</Link>
          </div>
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

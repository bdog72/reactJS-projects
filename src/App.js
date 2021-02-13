//
//

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './main.scss';

import BirthdayReminder from './projects-1-2-3/1-a/src/App';
import Tours from './projects-1-2-3/2-b/src/App';

import Reviews from './projects-1-2-3/3-c/src/App';

import Accordion from './projects-4-5-6/4-d/src/App';
import E from './projects-4-5-6/5-e/src/App';
import F from './projects-4-5-6/6-f/src/App';

export default function App() {
  return (
    <Router>
      <div className='app__router-container'>
        <div>
          <Link to='/birthday-reminder'>Birthday Reminder</Link>
          <Link to='/tours'>Tours</Link>
          <Link to='/reviews'>Reviews</Link>
        </div>
        <div>
          <Link to='/accordion'>Accordion</Link>
          <Link to='/e'>Eeeeee</Link>
          <Link to='/f'>Ffffff</Link>
        </div>
      </div>

      <hr />

      <Switch>
        <Route path='/birthday-reminder'>
          <BirthdayReminder />
        </Route>
        <Route path='/tours'>
          <Tours />
        </Route>
        <Route path='/reviews'>
          <Reviews />
        </Route>
        <Route path='/accordion'>
          <Accordion />
        </Route>
        <Route path='/e'>
          <E />
        </Route>
        <Route path='/f'>
          <F />
        </Route>
      </Switch>
    </Router>
  );
}

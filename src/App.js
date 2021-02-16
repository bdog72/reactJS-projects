//
//

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './main.scss';

import BirthdayReminder from './projects-1-2-3/1-a/src/App';
import Tours from './projects-1-2-3/2-b/src/App';

import Reviews from './projects-1-2-3/3-c/src/App';
import Accordion from './projects-4-5-6/4-d/src/App';

import Menu from './projects-4-5-6/5-e/src/App';
import Tabs from './projects-4-5-6/6-f/src/App';

import Slider from './projects-7-8-9/7-g/src/App';
import Lorem from './projects-7-8-9/8-h/src/App';

import Color from './projects-7-8-9/9-i/src/App';

export default function App() {
  return (
    <Router>
      <center>React Projects</center>
      <div className='app__router-container'>
        <div>
          <Link to='/birthday-reminder'>- 1 -</Link>
          <Link to='/tours'>- 2 -</Link>
          <Link to='/reviews'>- 3 -</Link>
        </div>
        <div>
          <Link to='/accordion'>- 4 -</Link>
          <Link to='/menu'>- 5 -</Link>
          <Link to='/tabs'>- 6 -</Link>
        </div>
        <div>
          <Link to='/slider'>- 7 -</Link>
          <Link to='/lorem'>- 8 -</Link>
          <Link to='/color'>- 9 -</Link>
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
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/tabs'>
          <Tabs />
        </Route>
        <Route path='/slider'>
          <Slider />
        </Route>
        <Route path='/lorem'>
          <Lorem />
        </Route>
        <Route path='/color'>
          <Color />
        </Route>
      </Switch>
    </Router>
  );
}

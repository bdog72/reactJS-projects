//
//

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './index.scss';

import A from './projects-1-2-3/1-a/src/App';
import B from './projects-1-2-3/2-b/src/App';
import C from './projects-1-2-3/3-c/src/App';

import D from './projects-4-5-6/4-d/src/App';
import E from './projects-4-5-6/5-e/src/App';
import F from './projects-4-5-6/6-f/src/App';

export default function App() {
  return (
    <Router>
      <div className='app__router-container'>
        <div>
          <Link to='/a'>Birthday Reminder</Link>
          <Link to='/b'>Bbbbbb</Link>
          <Link to='/c'>Cccccc</Link>
        </div>
        <div>
          <Link to='/d'>Dddddd</Link>
          <Link to='/e'>Eeeeee</Link>
          <Link to='/f'>Ffffff</Link>
        </div>
      </div>

      <hr />

      <Switch>
        <Route path='/a'>
          <A />
        </Route>
        <Route path='/b'>
          <B />
        </Route>
        <Route path='/c'>
          <C />
        </Route>
        <Route path='/d'>
          <D />
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

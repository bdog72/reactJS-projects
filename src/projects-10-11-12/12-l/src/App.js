//
//

import React from 'react';
import Modal from './Modal';

import Sidebar from './Sidebar';
import Home from './Home';

import './index.scss';

function App() {
  return (
    <div className='app__12-main-container'>
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
}

export default App;

//
//

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import List from './List';

import Alert from './Alert';
import './index.scss';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('bozo');
  // };

  return (
    <div className='app__10-main-container'>
      <h1>Bozo</h1>
    </div>
  );
}

export default App;

//
//

import React from 'react';
import { useGlobalContext } from './context';

import './index.scss';

import Navbar from './Navbar';
import CartContainer from './CartContainer';

// const bozo =
//   'https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    const style = {
      textAlign: 'center',
      marginTop: '100px',
      fontSize: '2rem',
      fontFamily: 'Yusei Magic',
    };

    return (
      <div style={style} className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='app__14-main-container'>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;

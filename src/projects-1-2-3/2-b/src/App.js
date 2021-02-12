//
//

import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import Tours from './Tours';

// import './app.css';
import './app.scss';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className='app__2-main-element'>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className='bozo'>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
  }

  return (
    <div className='app__2-main-container'>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </div>
  );
}

export default App;

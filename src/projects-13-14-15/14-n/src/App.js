//
//

import React from 'react';

import { AppProvider } from './context';
import Loading from './Loading';

const App = () => {
  return (
    <>
      <AppProvider>
        <Loading />
      </AppProvider>
    </>
  );
};

export default App;

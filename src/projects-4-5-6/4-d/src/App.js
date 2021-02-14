//
//

import React, { useState } from 'react';
import data from './data';

import './index.scss';
import SingleQuestion from './Question';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(data);
  // const { id, title, info } = bozo;
  return (
    <div className='app__4-main-container'>
      <main>
        <div className='container'>
          <h3>Questions and answers about login</h3>
          <section className='info'>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
      {/* <h2>accordion project setup</h2>
      {data.map((d) => {
        console.log(d);
        return d;
      })} */}
    </div>
  );
}

export default App;

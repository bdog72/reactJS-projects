//
//

import React, { useState, useContext } from 'react';
import { data } from '../../data';

import '../../index.css';

// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <div className='container'>
      <PersonContext.Provider value={{ removePerson, people }}>
        <h3>Context API / useContext</h3>
        <List />
      </PersonContext.Provider>
    </div>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

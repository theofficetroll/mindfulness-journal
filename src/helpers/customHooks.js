import React, { useState } from 'react';

const useRapid = (cb) => {
  const [ inputs, setInputs ] = useState({ entry: '' });

  const handleSubmit = (e) => {
    if(e) {
      e.preventDefault();
    }
    // TODO generalize posting function
    fetch(`http://localhost:3000/rapid`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Entry added!');
      return res;
    })
    .then(data => {
      setInputs(inputs => ({ entry: '' }));
    })
    .catch(error => {
      console.log('Error received', error);
    })
  }

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({...inputs, [e.target.name]: e.target.value}));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
}

export default useRapid;

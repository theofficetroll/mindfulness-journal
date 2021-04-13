import React, { useState } from 'react';

const useRapid = (cb) => {
  const [ inputs, setInputs ] = useState({ entry: '' });

  const handleSubmit = (e) => {
    if(e) {
      e.preventDefault();
    }
    // Send to wherever we're keeping entries
    console.log('entry saved!');
    setInputs((inputs) => ({...inputs, entry: ''}));
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

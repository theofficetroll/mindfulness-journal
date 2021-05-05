import React from 'react';
import Navbar from '../components/navbar.jsx';
import { useRapid } from '../helpers/customHooks.js';

// TODO
// Add type
// Add keywords
// Add keyboard shortcuts for type

const RapidLog = () => {
  const { inputs, handleInputChange, handleSubmit } = useRapid();

  return(
    <div>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Rapid Log Entry</label>
            <input type='text' name='entry' onChange={handleInputChange} value={inputs.entry} required />
            <button type='submit'>Done</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RapidLog;

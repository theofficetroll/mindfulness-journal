import React from 'react';
import Navbar from '../components/navbar.jsx';
import { useRapid } from '../helpers/customHooks.js';

// TODO
// Add type
// Add keywords
// Add keyboard shortcuts for type
// Fix timezone offset

/*
Types:
  Tasks
  Events
  Note (default)
*/

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
            <select onChange={handleInputChange} value={inputs.type}>
              <option value='note'>- Note</option>
              <option value='task'>* Task</option>
              <option value='event'>o Event</option>
            </select>
            <button type='submit'>Done</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RapidLog;

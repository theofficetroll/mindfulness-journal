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
            <select name='entryType' onChange={handleInputChange} value={inputs.entryType}>
              <option value='-'>- Note</option>
              <option value='*'>* Task</option>
              <option value='o'>o Event</option>
            </select>
            <button type='submit'>Done</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RapidLog;

import React from 'react';
import Navbar from '../components/navbar.jsx';

const RapidLog = () => {
  return(
    <div>
      <Navbar />
      <div>
        <form>
          <div>
            <label>Rapid Log Entry</label>
            <input type='text' name='entry' required />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RapidLog;

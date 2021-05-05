import React from 'react';
import Entry from './entry.jsx';

const EntryList = ({ entries }) => {
  return (
    <div className='entry'>
      ${entries}
    </div>
  )
}

export default EntryList;

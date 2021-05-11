import React from 'react';

// TODO
// Add options to make updates to entries
// Right click to make updates?

const Entry = ({ entry, time, entryType }) => {

  return (
    <div className='entry'>
      {entryType} {time} : {entry}
    </div>
  )
}

export default Entry;
